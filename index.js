const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = '自动部署'
})

app.listen(7777, () => {
    console.log('server is running in 7777');
})