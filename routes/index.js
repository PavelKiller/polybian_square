var express = require('express');
var router = express.Router();
const op         = require('../codeGen/operator.js'),
      bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: true});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/encode', urlencodedParser, (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  console.log(req.body);
  res.status(200).send([op.enc(op.sqr(req.body.str)[0], req.body.str), op.sqr(req.body.str)[1]]);
});
router.post('/decode', urlencodedParser, (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  console.log(req.body);
  res.send(op.dec(op.sqr(req.body.key)[0], req.body.str));
});
module.exports = router;
