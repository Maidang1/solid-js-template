const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path');

// or use absolute paths
app.use(serve(path.join(__dirname, '../dist')));

const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log('listening on port ' + PORT);
