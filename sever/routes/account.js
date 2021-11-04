/*
 * @Desc: 
 * @Author: wringY
 * @Date: 2021-04-23 22:09:08
 * @LastEditTime: 2021-05-02 10:24:22
 * @FilePath: \react-app\sever\routes\account.js
 */
var express = require('express')
var router = express.Router()
const loginMock = require('../mock/account/login')
const SMSCode = require('../mock/account/SMSCode')
console.log(SMSCode)
router.post('/login/', (req, res, next) => {
  if(req.body.user === 'admin' || req.body.phone) {
    loginMock.data.user = {role: 'admin'}
  } else {
    loginMock.data.user = {role: 'guest'}
  }
    res.json({
      code: 200,
      data: loginMock
    })
    next();
  })
router.get('/getSMSCode', (req, res, next) => {
  res.json({
    code: 0,
    data: SMSCode
  })
})
module.exports = router