'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')
//Route.on('/template').render('template')
Route.get('/', 'LoginController.index');
Route.post('/login', 'LoginController.login');
Route.get('/logout', 'LoginController.logout');
Route.get('/bemvindo', 'LoginController.bemVindo');

//Rotas para o CRUD de Produtos
Route.get('/produtos', 'ProdutoController.index')
Route.get('/produtos/novo', 'ProdutoController.criar')
Route.post('/produtos/salvar', 'ProdutoController.salvar')