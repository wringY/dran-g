/*
 * @Desc: 
 * @Author: wringY
 * @Date: 2021-05-01 11:47:31
 * @LastEditTime: 2021-05-01 12:46:26
 * @FilePath: \react-app\sever\mock\account\SMSCode.js
 */
let str = ''
for(let i = 0; i < 6; i++) {
  str += Math.floor(Math.random() * (9- 1 + 1) + 1)
} 
module.exports = {
    code: 0,
    data: {
        SMSCode: str
    },
    message: '登录成功'
}
