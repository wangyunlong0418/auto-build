const Koa = require('koa');
const createHandler = require('github-webhook-handler');
const { runCmd } = require('./utils/tools');
const handler = createHandler({
    path: '/',
    secret: '707418'
})
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = '为什么不打印'
})

app.listen(7777, () => {
    console.log('server is running in 7777');
})

handler.on('error', (err) => {
    console.error('Error', err);
})

handler.on('push', (event) => {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
    runCmd('sh', ['./deploy.sh', event.payload.repository.name], (text) => {
        console.log(text)
    });
});