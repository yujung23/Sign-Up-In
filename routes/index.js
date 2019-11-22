var express = require('express');
var router = express.Router();
var db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function (req, res) {
  return res.render('index', { title: '로그인' });
});

router.post('/', (req, res) => {
  let { id, pw } = req.body;
  db.mysql.query('SELECT * FROM user_info WHERE id=?', id, (err, userInfo) => {
    if (err || !userInfo[0]) {
      return res.render('error', { message: "에러" })
    }
    bcrypt.compare(pw, userInfo[0].pw, (err, tf) => {
      if (tf !== true) {
        return res.render('error', { message: "아이디 또는 비밀번호를 확인해주세요." })
      } else {
        req.session.is_logined = true;
        return res.redirect('/main')
      }
    })
  })
})

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    return res.redirect('/')
  })
})

module.exports = router;
