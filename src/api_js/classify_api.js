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
    query(sql.ISHAS_CLASS, [c_name], function(err, results) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            console.log(results)
        }
    })
}

module.exports = {
    selectallclass: selectallclass,
    addclass: addclass
}