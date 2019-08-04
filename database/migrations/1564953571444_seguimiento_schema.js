'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeguimientoSchema extends Schema {
  up () {
    this.create('seguimientos', (table) => {
      table.increments()
      table.integer('paciente_id').unsigned().references('id').inTable('pacientes')
      table.string('peso').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('seguimientos')
  }
}

module.exports = SeguimientoSchema
