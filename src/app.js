const Koa = require('koa');
const router = require("./controller")

const app = new Koa();
app.use(router.routes())
   .use(router.allowedMethods())
 

app.listen(3000);
console.log("已启动服务器")