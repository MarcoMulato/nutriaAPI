'use strict'
const Usuario = use('App/Models/Usuario')
const Token = use('App/Models/Token')
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
        const usuarioInfo = request.only(['usuario','correo','contraseña'])

        const usuario = new Usuario()
        console.log("Usuario: ", usuarioInfo.usuario)
        console.log("Contraseña: ", usuarioInfo.contraseña)
        usuario.usuario = usuarioInfo.usuario
        usuario.correo = usuarioInfo.correo
        usuario.contraseña = usuarioInfo.contraseña
    
        await usuario.save()
    
        return response.status(201).json(usuario)
    }

    async update ({ params, request, response }) {
        const usuarioInfo = request.only(['usuario','correo','contraseña'])
        
        const usuario = await Usuario.find(params.id)
        if (!usuario) {
            return response.status(404).json({data: "Usuario no encontrado."})
        }
        usuario.usuario = usuarioInfo.usuario
        usuario.correo = usuarioInfo.correo
        usuario.contraseña = usuarioInfo.contraseña
    
        await usuario.save()
    
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
        logi.log = "Se actualizo la contraseña"
        logi.usuario = params.id
        await logi.save()
    
        return response.status(200).json(usuario)
    }

    async delete ({ params, response }) {
        const usuario = await Usuario.find(params.id)
        if (!usuario) {
            return response.status(404).json({data: "Usuario no encontrado."})
        }
        await usuario.delete()

        return response.status(204).json(null)
    }
    async login({request, response, auth}) {
        const {correo, contraseña} = request.all();
        const logi = new Log()
        console.log("contra", contraseña)
        const usuario = await auth.attempt(correo, contraseña);
        console.log("AL SALIR", usuario.token)
        const user_id = await Usuario.query().select('id').where('correo','=',correo).fetch()
        Object.assign(usuario,user_id.toJSON())
        console.log("AL SALIR", user_id.toJSON())
        logi.log = "Se logeo un nutriologo"
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