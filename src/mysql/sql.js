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
    'ISHAS_CLASS': 'select * from lcassify where C_name=?'
        //添加分类
    'ADD_CLASS': 'insert into classify (c_id,c_name,uid,type) values (?,?,?,?)'
}