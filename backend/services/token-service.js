const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;
const refreshModel = require('../models/refresh-model.js') ;
class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload,accessTokenSecret,{
            expiresIn: '1h'
        });
        const refreshToken = jwt.sign(payload,refreshTokenSecret,{
            expiresIn: '1y'
        });
        return {accessToken, refreshToken};
    }

    async storeRefreshToken(token, userId){
        try{
            await refreshModel.create({
                token: token,
                userId: userId
            })
        }catch(error){
            console.log(error.message);
        }
    }

    async verifyAccessToken(token){
        return jwt.verify(token, accessTokenSecret);
    }
    async verifyRefreshToken(token){
        return jwt.verify(token, refreshTokenSecret);
    }

    async findRefreshToken(userId, refreshToken){
        const token = await refreshModel.findOne({userId: userId, token: refreshToken });
        return token;
    }

    async updateRefreshToken(userId, refershToken){
        return await refreshModel.updateOne({userId: userId}, {token: refershToken});
    }

    async removeToken(refreshToken){
        return await refreshModel.deleteOne({token: refreshToken});
    }
}
module.exports = new TokenService();