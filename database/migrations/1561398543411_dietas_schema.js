'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DietasSchema extends Schema {
  up () {
    this.create('dietas', (table) => {
      table.increments()
      table.string('nombre').notNullable()
      table.string('lista_dieta').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dietas')
  }
}

module.exports = DietasSchema
