var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  if (req.session.is_logined !== true) {
    return res.redirect('/')
  }
  return res.render('main', { title: "메인페이지" });
});



module.exports = router;
