'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DatosSchema extends Schema {
  up () {
    this.create('datos', (table) => {
      table.increments()
      table.integer('paciente_id').unsigned().references('id').inTable('pacientes')
      table.integer('dieta_id').unsigned().references('id').inTable('dietas')
      table.string('sexo').notNullable()
      table.string('edad').notNullable()
      table.string('actividad_fisica').notNullable()
      table.string('peso').notNullable()
      table.string('grasa').notNullable()
      table.string('talla').notNullable()
      table.string('cintura').notNullable()
      table.string('musculo').notNullable()     
      table.string('pliegues').notNullable() 
      table.timestamps()
    })
  }

  down () {
    this.drop('datos')
  }
}

module.exports = DatosSchema
