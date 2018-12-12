module.exports = {
    //查询所有用户
    'SELECT_USER': 'select * from userlist',
    //添加用户
    'ADD_USER': 'insert into userlist (uid,nick_name) values (?,?)',
    //查询图标
    'SELECT_ICON': 'select * from iconlist',
    //查询所有类
    'SELECT_ALLCLASS': 'select * from classifylist',
    //查询分类是否存在
    'ISHAS_CLASS': 'select * from classifylist where (uid="*" or uid=?) and c_name=? and type=?',
    //添加分类
    'ADD_CLASS': 'insert into classifylist (c_id,uid,c_name,icon_name,type) values (?,?,?,?,?)'
}