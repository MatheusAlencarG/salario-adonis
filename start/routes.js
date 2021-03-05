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

Route.on('/').render('Index')

Route.on('/Index.edge').render('Index')

// rotas da tabela salarios
Route.get('/salaries', 'SalaryController.list')

Route.get('/salaries/:id', 'SalaryController.show')

Route.post('/salaries', 'SalaryController.add')

Route.put('/salaries/:id', 'SalaryController.update')

Route.delete('/salaries/:id', 'SalaryController.delete')
// fim das rotas da tabela salarios


// rotas da tabela employees
Route.get('/employees', 'EmployeeController.list')

Route.get('/employees/:id', 'EmployeeController.show')

Route.post('/employees', 'EmployeeController.add')

Route.put('/employees/:id', 'EmployeeController.update')

Route.delete('/employees/:id', 'EmployeeController.delete')
// fim das rotas da tabela employees


// rotas da tabela users
Route.get('/users', 'RegisterController.list')

Route.get('/users/:id', 'RegisterController.show')

Route.post('/users', 'RegisterController.add')

Route.put('/users/:id', 'RegisterController.update')

Route.delete('/users/:id', 'RegisterController.delete')
// fim das rotas da tabela users


// rotas da tabela roles
Route.get('/roles', 'RoleController.list')

Route.get('/roles/:id', 'RoleController.show')

Route.post('/roles', 'RoleController.add')

Route.put('/roles/:id', 'RoleController.update')

Route.delete('/roles/:id', 'RoleController.delete')
// fim das rotas da tabela roles