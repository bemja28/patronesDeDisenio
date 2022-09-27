var express = require('express');
var router = express.Router();
const { index, about} = require('../controllers/mainController')

/* GET home page. */
router
     .get('/', index)
     .get('/about', about)



module.exports = router;