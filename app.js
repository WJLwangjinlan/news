// 1 导包
const express = require('express');
const router = require('./router');
// 2 app对象
const app = express();
app.use(router);
// 4 绑定端口
app.listen (12345,() => {
    console.log('12345');
})
