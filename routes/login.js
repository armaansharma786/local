
const express      = require('express');
const router       = express.Router();

const loginValidator  = require('../validator/login');
const loginController = require('../controller/login');

router.get('/',(req, res)=> {
    res.send('Express is working')
});

router.post('/login', loginValidator.loginUser, loginController.loginUser);

module.exports = router;