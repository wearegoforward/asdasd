const Router = require('koa-router');

const books = new Router();

const booksCtrl = require('./books.controller');

books.get('/', booksCtrl.list);
books.get('/:id', booksCtrl.get);
books.post('/', booksCtrl.create);
books.delete('/:id', booksCtrl.delete);
books.put('/:id', booksCtrl.replace);
books.patch('/:id', booksCtrl.update);

// books.get('/', (ctx,next)=>{
//     ctx.body='GET'+ctx.request.path;
// });

module.exports = books;
