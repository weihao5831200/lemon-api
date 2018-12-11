var query = require('../mysql');

var sql = require('../mysql/sql');

var uuid = require('node-uuid');

var selectalluser = function(req, res, next) {
    query(sql.SELECT_USER, function(err, results) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, data: results })
        }
    })
}

var adduser = function(req, res, next) {
    var nick_name = req.body.nick_name;
    var uid = uuid.v1();
    query(sql.ADD_USER, [uid, nick_name], function(err, results) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: '添加成功' })
        }
    })
}

module.exports = {
    selectalluser: selectalluser,
    adduser: adduser
}