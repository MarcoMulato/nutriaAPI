'use strict'
const Seguimiento = use('App/Models/Seguimiento')

class SeguimientoController {
    async store ({ request, response }) {
        const seguimientoInfo = request.only(['peso','paciente_id'])

        const seguimiento = new Seguimiento()
        seguimiento.paciente_id = seguimientoInfo.paciente_id
        seguimiento.peso = seguimientoInfo.peso
    
        await seguimiento.save()
    
        return response.status(201).json(seguimiento)
    }
}

module.exports = SeguimientoController
