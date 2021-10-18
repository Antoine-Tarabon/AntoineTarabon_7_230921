const router = require('express').Router();
const authCtrl = require('../controllers/auth');


router.post("/register", authCtrl.signup);
router.post('/login', authCtrl.login);
router.get('/logout', authCtrl.logout);

module.exports = router;