'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteSchema extends Schema {
  up () {
    this.create('pacientes', (table) => {
      table.string('usuario', 80).notNullable().unique()
      table.string('correo', 254).notNullable().unique()
      table.string('contraseña', 60).notNullable()
      table.integer('nutriologo_id').unsigned().references('id').inTable('usuarios')
      table.timestamps()
    })
  }

  down () {
    this.drop('pacientes')
  }
}

module.exports = PacienteSchema
