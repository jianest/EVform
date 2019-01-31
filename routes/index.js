var express = require('express');
var router = express.Router();
// var con = require('../dbconfig').connection;

/* 用户访问首页 */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* session */
router.get('/axios_session', function(req, res, next) {
	// 判断session是否存在
  if(req.session.user){
		res.json({session:true});
	}else{
		res.json({session:false});
	}
});

module.exports = router;
