var express = require('express')
var router = express.Router();
const controllers = require('../controllers/controllers_admin')

/* GET admin login page. */
router.get('/', function(req, res, next) {
  res.render('admin');
});
/* GET admin login page. */
router.get('/admin', controllers.form);
router.post('viewprofile',  controllers.login);

router.get('/viewprofile', function(req, res, next) {
    res.render('viewprofile');
  });

module.exports = router;
