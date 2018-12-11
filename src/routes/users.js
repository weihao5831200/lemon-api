var express = require('express');

var router = express.Router();

var userapi = require('../api_js/user_api');

//查所有用户
router.get('/api/selectalluser', userapi.selectalluser);

//添加用户
router.post('/api/adduser', userapi.adduser)
module.exports = router;