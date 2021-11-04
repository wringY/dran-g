/*
 * @Desc: 
 * @Author: wringY
 * @Date: 2021-04-23 22:08:57
 * @LastEditTime: 2021-04-23 22:29:01
 * @FilePath: \react-app\sever\routes\index.js
 */
const express = require(`express`)
const accountRoute = require('./account')
const router = express.Router()
router.use((req, res, next) => {
  console.log(`路由执行成功啦~~~`, Date.now());
  next()
})
router.use('/account', accountRoute)


module.exports = router