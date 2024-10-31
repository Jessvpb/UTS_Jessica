var express = require('express');
var router = express.Router();

const JessicaController = require('../controller/jessica');
const jessica = require('../model/jessica');

router.post('/', JessicaController.jessicaCreate);

module.exports = router;