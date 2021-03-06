'use strict'
const Usuario = use('App/Models/Paciente')
const Log = use('App/Models/Log')
class UsuarioController {
    async index ({ response }) {
        let usuarios = await Usuario.all()
        return response.json(usuarios)
    }

    async show ({ params, response }) {
        const usuario = await Usuario.find(params.id)

        return response.json(usuario)
    }

    async store ({ request, response }) {
        const usuarioInfo = request.only(['usuario','correo','contraseña','nutriologo_id'])

        const usuario = new Usuario()
        const logi = new Log()
        console.log("Usuario: ", usuarioInfo.usuario)
        console.log("Contraseña: ", usuarioInfo.contraseña)
        usuario.usuario = usuarioInfo.usuario
        usuario.correo = usuarioInfo.correo
        usuario.contraseña = usuarioInfo.contraseña
        usuario.nutriologo_id = usuarioInfo.nutriologo_id
        await usuario.save()
        logi.log = "Se creo un paciente"
        logi.usuario = usuarioInfo.nutriologo_id
        await logi.save()
    
        return response.status(201).json(usuario)
    }

    async update ({ params, request, response }) {
        const usuarioInfo = request.only(['usuario','correo'])
        const logi = new Log()
        const usuario = await Usuario.find(params.id)
        if (!usuario) {
            return response.status(404).json({data: "Paciente no encontrado."})
        }
        usuario.usuario = usuarioInfo.usuario
        usuario.correo = usuarioInfo.correo
    
        await usuario.save()
        logi.log = "Se actualizo un paciente"
        logi.usuario = params.id
        await logi.save()
        return response.status(200).json(usuario)
    }
    async password ({ params, request, response }) {
        const usuarioInfo = request.only(['contraseña'])
        const logi = new Log()
        const usuario = await Usuario.find(params.id)
        if(!usuario) {
            return response.status(404).json({data: "Paciente no encontrado."})
        }
        usuario.contraseña = usuarioInfo.contraseña

        await usuario.save()
        logi.log = "Se actualizo un contraseña de paciente"
        logi.usuario = params.id
        await logi.save()
        return response.status(200).json(usuario)
    }

    async dieta ({ params, request, response }) {
        const usuarioInfo = request.only(['id_dieta'])
        const logi = new Log()
        const usuario = await Usuario.find(params.id)
        if (!usuario) {
            return response.status(404).json({data: "Paciente no encontrado."})
        }
        usuario.id_dieta = usuarioInfo.id_dieta
    
        await usuario.save()
        logi.log = "Se asigno una dieta"
        logi.usuario = params.id
        await logi.save()
        return response.status(200).json(usuario)
    }
    async delete ({ params, request, response }) {
        const usuarioInfo = request.only(['eliminado'])
        const logi = new Log()
        const usuario = await Usuario.find(params.id)
        if(!usuario) {
            return response.status(404).json({data: "Paciente no encontrado."})
        }
        usuario.eliminado = usuarioInfo.eliminado

        await usuario.save()
        logi.log = "Se desactivo un paciente"
        logi.usuario = params.id
        await logi.save()
        return response.status(200).json(usuario)
    }
    async login({request, response, auth}) {
        const {correo, contraseña} = request.all();
        const logi = new Log()
        console.log("contra", contraseña)
        const usuario = await auth.authenticator('api2').attempt(correo, contraseña);
        const user_id = await Usuario.query().select('id').where('correo','=',correo).fetch()
        console.log("usuario: ", usuario)
        Object.assign(usuario,user_id.toJSON())
        console.log("AL SALIR", user_id.toJSON())
        logi.log = "Inicio sesion un paciente"
        logi.usuario = correo
        await logi.save()
        return response.json(usuario);
    }
}

module.exports = UsuarioController
/**        let usuarios =  await Usuario.query().select('contraseña').fetch()
        usuarios = usuarios.toJSON()
        console.log( usuarios.length )
        var i;
        for (i = 0; i < usuarios.length; i++) { 
            usuarios[i]= Encryption.decrypt(usuarios[i].contraseña)
        }
        return response.json(usuarios) */