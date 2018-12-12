var express = require('express');

var router = express.Router();

var classifyapi = require('../api_js/classify_api');

//查所有类
router.get('/api/selectallclass', classifyapi.selectallclass);

//添加类
router.post('/api/addclass', classifyapi.addclass);
module.exports = router;