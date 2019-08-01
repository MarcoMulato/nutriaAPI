'use strict'
const Log = use('App/Models/Log')

class LogController {
    async show ({ params, response }) {
        const log = await Log.find(params.id)

        return response.json(usuario)
    }
}

module.exports = LogController
