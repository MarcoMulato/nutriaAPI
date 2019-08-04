'use strict'
const Seguimiento = use('App/Models/Seguimiento')

class SeguimientoController {
    async store ({ request, response }) {
        const seguimientoInfo = request.only(['peso'])

        const seguimiento = new Seguimiento()
        seguimiento.usuario = seguimientoInfo.usuario
    
        await seguimiento.save()
    
        return response.status(201).json(seguimiento)
    }
}

module.exports = SeguimientoController
