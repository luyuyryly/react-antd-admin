var express = require('express');
var pug = require('pug');
var fs = require('fs');
// 获取文件
var getFileSync = function(path, encoding){
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

// 获取文件json对象
// var getJSONSync = function(path){
//   var fileCon = getFileSync(path),
//     data = null;
//   if(fileCon){
//     fileCon =fileCon.replace(/\/\/ [^\n]*/g, '');
//     try{
//       data = JSON.parse(fileCon);
//     }catch(e){
//       console.log(e);
//       return null;
//     }
//   }
//   return data;
// };

//var config = getJSONSync("package.json");
var html = getFileSync("",'utf8');

var app = express();

var router = express.Router();
router.use(logger("combined"));

// 首页
router.get('/', function(req, res){
  res.send(html);
});

app.use(router);
app.listen(9090, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:9090')
});
