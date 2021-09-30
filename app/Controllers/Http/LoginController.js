'use strict'

const Usuario = use('App/Models/Usuario')

class LoginController {
    async index({view, response, session}) {
        if(session.get('nome')) 
            return response.redirect('/bemvindo');           
        else
            return view.render('login');
    }

    async login({request, response, session}) {
        const email = request.input('email');
        const senha = request.input('senha');
        
        const usuario = await Usuario.findBy("email", email);

        if(usuario && usuario.senha == senha) {
             console.log("Logado com sucesso!");
             const usuarioJSON = usuario.toJSON();            
             delete usuarioJSON.senha;
             session.put('usuario', usuarioJSON);
             return response.redirect('/bemvindo');           
        }
        else {
            console.log("Usuário ou senha invalidos");
            session.flash({
                notificacao: "Usuário ou senha inválidos!"
            })
            return response.redirect('back');
        }        
    }

    async logout({session,response}){
        session.clear();
        return response.redirect('/');
    }

    async bemVindo({view, session, response}) {
        const usuario = session.get('usuario');
        console.log("Usuario");
        console.log(usuario);
        if(usuario) { 
            return view.render('bemvindo', {usuario: usuario});
        }
        else {
            response.redirect('/');
        }
    }

}

module.exports = LoginController
