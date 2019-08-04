'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensPacienteSchema extends Schema {
  up () {
    this.create('tokens_pacientes', (table) => {
      table.increments()
      table.integer('paciente_id').unsigned()
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens_pacientes')
  }
}

module.exports = TokensPacienteSchema
