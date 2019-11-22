var express = require('express');
var router = express.Router();
var db = require('../config/db')
let bcrypt = require('bcrypt-nodejs');

/* GET users listing. */
router.get('/', function (req, res) {
    return res.render('signUp', { title: '회원가입' });
});

router.post('/', (req, res, next) => {
    let { id, pw } = req.body;
    pw = bcrypt.hashSync(pw)
    let sql = { id, pw }
    db.mysql.query('INSERT INTO user_info set ?', sql, (err) => {
        if (err) {
            console.log(err)
            return res.render('error', { message: "이미 존재하는 이이디 입니다" })
        }
        else {
            return res.redirect('/')
        }
    })
})

module.exports = router;
