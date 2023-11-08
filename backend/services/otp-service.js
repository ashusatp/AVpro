const crypto = require('crypto');
const hashService = require('./hash-service');
const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smsSid,smsAuthToken,{
    lazyLoading: true
})
class OtpService{
    async generateOtp() {
        const otp = crypto.randomInt(10000,99999);
        return otp;
    }

    async sendBySms(phone, otp) {
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `your AVpro OTP is ${otp}`
        })
    }

    verifyOtp(hashedOtp, data) {
        let computedHash = hashService.hashOtp(data);
        if(computedHash === hashedOtp){
            return true;
        }
        return false;
    }
}
module.exports = new OtpService();