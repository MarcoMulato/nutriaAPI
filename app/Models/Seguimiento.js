'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Seguimiento extends Model {
    static get table () {
        return 'seguimientos'
    }

    static get primaryKey () {
        return 'id'
    }
}

module.exports = Seguimiento
