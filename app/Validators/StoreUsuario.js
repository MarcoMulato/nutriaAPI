'use strict'

class StoreUsuario {
  get rules () {
    return {
      usuario: 'required',
      correo: 'required|unique:usuarios,correo',
      contraseña:'required',
    }
  }

  get messages () {
    return {
      'usuario.required': 'El campo usuario es necesario',
      'correo.required': 'El campo correo es necesario',
      'correo.unique': 'El correo ya existe en la base de datos',
      'contraseña.required':'La contraseña es necesaria'
    }
  }
}

module.exports = StoreUsuario
