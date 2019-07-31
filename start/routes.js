'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Usuario = use('App/Models/Usuario')

Route.group(() =>{
  //USUARIOS
  Route.post('usuarios', 'UsuarioController.store').validator('StoreUsuario');
  Route.get('usuarios', 'UsuarioController.index')
  Route.get('usuarios/:id', 'UsuarioController.show')
  Route.put('usuarios/:id', 'UsuarioController.update')
  Route.delete('usuarios/:id', 'UsuarioController.delete')  
  Route.post('login','UsuarioController.login')
  Route.put('usuarios_password/:id', 'UsuarioController.password')
  //PACIENTES
  Route.post('pacientes', 'PacienteController.store')
  Route.delete('eliminar_paciente/:id', 'PacienteController.delete')
  Route.post('pacientes_login','PacienteController.login')
  Route.get('pacientes','PacienteController.index')
  Route.get('pacientes/:id', 'PacienteController.show')
  Route.put('pacientes/:id', 'PacienteController.update')
  Route.put('pacientes/:id', 'PacienteDietaController.update')
  Route.put('pacientes_password/:id', 'PacienteController.password')
  Route.put('pacientes_asignar_dieta/:id', 'PacienteDietaController.dieta')
  Route.post('pacientes_dieta', 'PacienteDietaController.store')
  Route.post('pacientes_dieta_nueva', 'PacienteDietaController.storeNew')
  Route.get('pacientes_dieta', 'PacienteDietaController.index')
  Route.put('pacientes_dieta/:id', 'PacienteDietaController.update')
  Route.put('pacientes_dieta_terminar/:id', 'PacienteDietaController.finish')
  //DIETAS
  Route.post('dietas','DietaController.store')
  Route.get('dietas','DietaController.index')
  //DATOS
  Route.post('datos','DatoController.store')
  Route.get('datos/:id','DatoController.show')
  Route.put('datos/:id', 'DatoController.update')
  Route.delete('eliminar_datos/:id', 'DatoController.delete')
}).prefix('api/v1')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
