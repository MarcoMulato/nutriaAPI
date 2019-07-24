'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dato extends Model {
    static get table () {
        return 'datos'
    }

    static get primaryKey () {
        return 'id'
    }
}

module.exports = Dato
