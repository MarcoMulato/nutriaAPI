'use strict'
const Log = use('App/Models/Log')

class LogController {
    async index ({ response }) {
        let usuarios = await Usuario.all()
        return response.json(usuarios)
    }
}

module.exports = LogController
