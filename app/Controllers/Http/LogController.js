'use strict'
const Log = use('App/Models/Log')

class LogController {
    async index ({ response }) {
        let log = await Log.all()
        return response.json(log)
    }
}

module.exports = LogController
