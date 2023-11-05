const UserDto = require("../dtos/user-dto");
const hashService = require("../services/hash-service");
const otpService = require("../services/otp-service");
const tokenService = require("../services/token-service");
const userService = require("../services/user-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone field is required" });
    }

    //    Hash
    const otp = await otpService.generateOtp();
    const ttl = 1000 * 60 * 2; //2min
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    //    send OTP
    try {
      // await otpService.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}`,
        phone,
        otp
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "message sending failed" });
    }
  }

  async verifyOtp(req,res){
    const {otp, hash, phone} = req.body;
    if(!otp || !hash|| !phone){
        res.status(400).json({message: 'All fields are required!'});
    }

    const [hashedOtp, expires] = hash.split('.');
    if(Date.now() > +expires){
        res.status(400).json({message: 'OTP expired !'});
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashedOtp,data);
    if(!isValid){
        res.status(400).json({ message: "Invalid OTP" });
    }


    let user;

    
    try{
      user = await userService.findUser({phone: phone});
      if(!user){
        user = await userService.createUser({phone: phone});
      }
    }catch(error){
      console.log(err);
      res.status(500).json({message: 'Db error'});
    }

    // Tokens
    const {accessToken,refreshToken} = tokenService.generateTokens({_id: user._id, activated: false});
    res.cookie('refreshtoken',refreshToken,{
      maxAge: 1000*60*60*24*30, //30 days
      httpOnly: true
    });
    const userDto = new UserDto(user);
    res.json({accessToken,user: userDto})
      
  }
}

module.exports = new AuthController();
