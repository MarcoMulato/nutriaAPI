'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlimentosSchema extends Schema {
  up () {
    this.create('alimentos', (table) => {
      table.increments()
      table.string('nombre').notNullable()
      table.string('lipidos').notNullable()
      table.string('grasas').notNullable()
      table.string('proteinas').notNullable()
      table.string('vitaminas').notNullable()
      table.string('sodio').notNullable()
      table.string('azucares').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alimentos')
  }
}

module.exports = AlimentosSchema
