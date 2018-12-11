var express = require('express');

var router = express.Router();

var iconapi = require('../api_js/icon_api');

//查所有用户
router.get('/api/selectallicon', iconapi.selectallicon);
module.exports = router;