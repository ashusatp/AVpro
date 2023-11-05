const authController = require('./controllers/auth-controller');

const router = require('express').Router();

router.post('/api/send-otp', authController.sendOtp)
router.post('/api/verify-otp', authController.verifyOtp)

module.exports = router;