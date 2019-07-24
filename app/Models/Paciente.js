'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Paciente extends Model {
    static boot () {
        super.boot()

        this.addHook('beforeSave', async (pacienteInstance) => {
            if(pacienteInstance.dirty.contraseña) {
                pacienteInstance.contraseña = await Hash.make(pacienteInstance.contraseña)
            }
        })
    }
    static get table () {
        return 'pacientes'
    }
    static get primaryKey () {
        return 'id'
    }
}

module.exports = Paciente
