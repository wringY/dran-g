/*
 * @Desc: 
 * @Author: wringY
 * @Date: 2020-12-02 20:09:13
 * @LastEditTime: 2021-05-04 16:14:32
 * @FilePath: \react-app\sever\index.js
 */
let express = require('express');   //引入express
const router = require('./routes')  //  引入路由
var history = require('connect-history-api-fallback');
let app = express();        //实例化express
app.use(function(req, res, next) { // 开启跨域设置
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(`/`,router)
app.use(history())
app.use(express.static('static')) // 拖放静态资源
app.listen('8090', () => {
    console.log('监听端口 8090')
})
