'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Log extends Model {
    static get table () {
        return 'logs'
    }

    static get primaryKey () {
        return 'id'
    }
}

module.exports = Log
