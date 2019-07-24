'use strict'
const Dieta = use('App/Models/Dieta')
class DietaController {
    async index ({ response }) {
        let dietas = await Dieta.all()
        
        return response.json(dietas)
    }

    async show ({ params, response }) {
        const dieta = await Dieta.find(params.id)

        return response.json(dieta)
    }

    async store ({ request, response }) {
        const dietaInfo = request.only(['nombre','lista_dieta'])

        const dieta = new Dieta()
        console.log("Nombre: ", dietaInfo.nombre)
        console.log("Dieta: ", dietaInfo.lista_dieta)
        dieta.nombre = dietaInfo.nombre
        dieta.lista_dieta = dietaInfo.lista_dieta
    
        await dieta.save()
    
        return response.status(201).json(dieta)
    }

    async update ({ params, request, response }) {
        const dietaInfo = request.only(['lista_dieta'])
        
        const dieta = await Dieta.find(params.id)
        if (!dieta) {
            return response.status(404).json({data: "Dieta no encontrado."})
        }
        dieta.lista_dieta = dietaInfo.lista_dieta
    
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

module.exports = DietaController