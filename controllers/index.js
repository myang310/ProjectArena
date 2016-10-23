const models = require('../models/user');
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const basename = path.basename(module.filename);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const fileName = file.substr(0, file.length - 3);
    router.use(require(`./${fileName}`));
  });

router.get('/', function(req, res) {
  res.render('index/');
})

router.post('/', function(req, res){

})

module.exports = router;
