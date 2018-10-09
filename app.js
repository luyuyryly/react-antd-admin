var Koa = require('koa'); 
var serve = require('koa-static'); 
var path = require('path'); 
var Router = require('koa-router');
  
const app = new Koa();
 var router = new Router();  
// Serve static
// files 
app.use(serve(path.join(__dirname, './dist')));  
// 添加路由 
router.get('/', async (ctx, next) => {   ctx.response.body = 'hello'; });  
app.use(router.routes()); 
app.listen(9090); console.log('listening on port 9090...');

