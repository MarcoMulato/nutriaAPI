'use strict'
const Dato = use('App/Models/Dato')
const Log = use('App/Models/Log')
class DatoController {
    
    async index ({ response }) {
        let datos = await Dato.all()
        
        return response.json(datos)
    }

    async show ({ params, response }) {
        const datos = await Dato.query().select('*').where('paciente_id','=',params.id).fetch()
        return response.json(datos)
    }

    async store ({ request, response }) {
        const datoInfo = request.only(['paciente_id','dieta_id','sexo','edad','actividad_fisica','peso','grasa','talla','cintura','musculo','pliegues'])

        const dato = new Dato()
        dato.paciente_id = datoInfo.paciente_id
        dato.dieta_id = datoInfo.dieta_id
        dato.sexo = datoInfo.sexo
        dato.edad = datoInfo.edad
        dato.actividad_fisica = datoInfo.actividad_fisica
        dato.peso = datoInfo.peso
        dato.grasa = datoInfo.grasa
        dato.talla = datoInfo.talla
        dato.cintura = datoInfo.cintura
        dato.musculo = datoInfo.musculo
        dato.pliegues = datoInfo.pliegues
    
        await dato.save()
    
        return response.status(201).json(dato)
    }

    async update ({ params, request, response }) {
        const datoInfo = request.only(['sexo','edad','actividad_fisica','peso','grasa','talla','cintura','musculo','pliegues'])
        
        const dato = await Dato.find(params.id)
        if (!dato) {
            return response.status(404).json({data: "Dato no encontrado."})
        }
        dato.sexo = datoInfo.sexo
        dato.edad = datoInfo.edad
        dato.actividad_fisica = datoInfo.actividad_fisica
        dato.peso = datoInfo.peso
        dato.grasa = datoInfo.grasa
        dato.talla = datoInfo.talla
        dato.cintura = datoInfo.cintura
        dato.musculo = datoInfo.musculo
        dato.pliegues = datoInfo.pliegues
    
        await dato.save()
    
        return response.status(200).json(dato)
    }
    async updatePeso ({ params, request, response }) {
        const datoInfo = request.only(['peso'])
        
        const dato = await Dato.find(params.id)
        if (!dato) {
            return response.status(404).json({data: "Dato no encontrado."})
        }
        dato.peso = datoInfo.peso
    
        await dato.save()
    
        return response.status(200).json(dato)
    }
    async delete ({ params, response }) {
        const dato = await Dato.find(params.id)
        if (!dato) {
            return response.status(404).json({data: "Dato no encontrado."})
        }
        await dato.delete()

        return response.status(204).json(null)
    }
}

module.exports = DatoController
