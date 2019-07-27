'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TokenPaciente extends Model {
    static get table () {
        return 'tokens_pacientes'
    }
    static get UserKey () {
        return 'paciente_id'
    }
}

module.exports = TokenPaciente
