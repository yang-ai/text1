//导入koa，和koa.1不同，在koa.2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

//创建一个Koa对象表示web app本身
const app = new Koa();

//对于任何请求，app将调用异步函数处理请求
app.use(async (ctx, next) => {
  awit next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>hello, koa2</h1>';
});

//在端口3000监听
app.listen(3000);
console.log('app started at port 3000...');