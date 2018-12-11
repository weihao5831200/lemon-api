var query = require('../mysql');

var sql = require('../mysql/sql');

var selectallicon = function(req, res, next) {
    query(sql.SELECT_ICON, function(err, results) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, data: results })
        }
    })
}

module.exports = {
    selectallicon: selectallicon
}