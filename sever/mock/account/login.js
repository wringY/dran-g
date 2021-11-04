/*
 * @Desc: 
 * @Author: wringY
 * @Date: 2021-04-23 22:15:16
 * @LastEditTime: 2021-04-23 22:18:33
 * @FilePath: \react-app\sever\mock\account\login.js
 */
module.exports = {
    code: 0,
    data: {
        token: Math.random().toString(36).substr(2)
    },
    message: '登录成功'
}