'use strict'
const Dieta = use('App/Models/PacienteDieta')
class PacienteDietaController {
    async index ({ response }) {
        let dietas = await Dieta.all()
        
        return response.json(dietas)
    }

    async show ({ params, response }) {
        const dieta = await Dieta.find(params.id)

        return response.json(dieta)
    }

    async store ({ request, response }) {
        const dietaInfo = request.only(['paciente_id'])

        const dieta = new Dieta()
        dieta.paciente_id = dietaInfo.paciente_id
        dieta.status = "Sin ninguna dieta"
    
        await dieta.save()
    
        return response.status(201).json(dieta)
    }

    async storeNew ({ request, response }) {
        const dietaInfo = request.only(['paciente_id','fecha_inicio','lista_dieta'])

        const dieta = new Dieta()
        dieta.paciente_id = dietaInfo.paciente_id
        dieta.lista_dieta = dietaInfo.lista_dieta
        dieta.fecha_inicio = dietaInfo.fecha_inicio
        dieta.status = "Dieta en curso"
    
        await dieta.save()
    
        return response.status(201).json(dieta)
    }

    async update ({ params, request, response }) {
        const dietaInfo = request.only(['fecha_inicio','lista_dieta'])
        
        const dieta = await Dieta.find(params.id)
        if (!dieta) {
            return response.status(404).json({data: "Dieta no encontrado."})
        }
        dieta.lista_dieta = dietaInfo.lista_dieta
        dieta.fecha_inicio = dietaInfo.fecha_inicio
        dieta.status = "Dieta en curso"
    
        await dieta.save()
    
        return response.status(200).json(dieta)
    }
    async finish ({ params, request, response }) {
        const dietaInfo = request.only(['fecha_termino'])
        
        const dieta = await Dieta.find(params.id)
        if (!dieta) {
            return response.status(404).json({data: "Dieta no encontrado."})
        }
        dieta.fecha_termino = dietaInfo.fecha_termino
        dieta.status = "Dieta terminada"
    
        await dieta.save()
    
        return response.status(200).json(dieta)
    }
    async delete ({ params, response }) {
        const dieta = await Dieta.find(params.id)
        if (!dieta) {
            return response.status(404).json({data: "Dieta no encontrado."})
        }
        await dieta.delete()

        return response.status(204).json(null)
    }
}

module.exports = PacienteDietaController
