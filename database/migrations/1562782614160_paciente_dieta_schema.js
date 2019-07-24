'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PacienteDietaSchema extends Schema {
  up () {
    this.create('paciente_dietas', (table) => {
      table.increments()
      table.integer('paciente_id').unsigned().references('id').inTable('pacientes')
      table.string('fecha_inicio')
      table.string('fecha_termino')
      table.string('lista_dieta').notNullable()
      table.string('status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('paciente_dietas')
  }
}

module.exports = PacienteDietaSchema
