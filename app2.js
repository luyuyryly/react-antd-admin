var express = require('express');
var fs = require('fs');
var logger = require('morgan');
// 获取文件
let getFileSync = function(path, encoding){
  if(encoding === undefined){
    encoding = 'utf8';
  }
  if(encoding === 'buffer'){
    encoding = undefined;
  }
  var fileCon = null;

  if(fs.existsSync(path)){
    fileCon = fs.readFileSync(path, encoding) || '';
  }

  return fileCon;
};

var html = getFileSync("./dist/index.html",'utf8');

var app2 = express();

const router = express.Router();
router.use(logger("combined"));

// 首页
router.get('/', function(req, res){
  res.send(html);
});

app2.use(router);
app2.listen(9090, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:9090')
});
