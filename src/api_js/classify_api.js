var query = require('../mysql');

var sql = require('../mysql/sql');

var uuid = require('node-uuid');

var selectallclass = function(req, res, next) {
    query(sql.SELECT_ALLCLASS, function(err, results) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, data: results })
        }
    })
}

var addclass = function(req, res, next) {
    var c_id = uuid.v1();
    var uid = req.body.uid,
        c_name = req.body.c_name,
        icon_name = req.body.icon_name,
        type = req.body.type;
    query(sql.ISHAS_CLASS, [uid, c_name, type], function(err, results) {
        if (!uid || !c_name || !type) {
            res.json({ code: 4, msg: '缺少参数' })
        } else {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                if (results.length) {
                    res.json({ code: 3, msg: '类已经存在' })
                } else {
                    addc();
                }
            }
        }
    })

    function addc() {
        query(sql.ADD_CLASS, [c_id, uid, c_name, icon_name, type], function(err, results) {
            if (!c_id || !uid || !c_name || !icon_name || !type) {
                res.json({ code: 4, msg: '缺少参数' })
            } else {
                if (err) {
                    res.json({ code: 0, msg: err })
                } else {
                    res.json({ code: 1, msg: '添加成功' })
                }
            }
        })
    }
}

module.exports = {
    selectallclass: selectallclass,
    addclass: addclass,
}