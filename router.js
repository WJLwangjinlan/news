//  路由模块
// 1 导包
const express = require('express');
const router = express.Router();
const c_user = require('./controllers/c_user');
// 2 express.Router()获取对象router
const app = express();
// 3 router.get()
router.get('/signin',c_user.showSignin);
module.exports =router;

// 4 导出对象router一个对象
module.exports = router; 
