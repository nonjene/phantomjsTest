const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-better-body');
const serve = require('koa-static');
const compress = require('koa-compress');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');

app.use(compress({
    flush: require('zlib').Z_SYNC_FLUSH
}));
app.use(conditional());
app.use(etag());
app.use(koaBody());
app.use(serve(__dirname + '/public/', {
    maxage: 31536000000
}));


app.use((ctx, next) => {
    if (ctx.request.url === '/') {
        ctx.body = 'hello! welcome!!';
        ctx.status = 200;
        ctx.type = 'text/html; charset=UTF-8';
    } else {
        return next()
    }
});
app.use((ctx, next) => {
    // require("./phantomjs");
    return next();
});

app.use((ctx, next) => {
    ctx.body = "Page not found.";
    ctx.status = 404;
});
app.listen(process.env.PORT || 3005);

