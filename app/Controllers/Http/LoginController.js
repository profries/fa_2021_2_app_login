'use strict'

const Usuario = use('App/Models/Usuario')

class LoginController {
    async index({view}) {
        return view.render('login');
    }

    async login({request, response, session}) {
        const usuario = new Usuario();
        usuario.email = request.input('email');
        usuario.senha = request.input('senha');
        usuario.nome = "Administrador";

        if(usuario.email == "admin@admin.com" && usuario.senha == "12345") {
             console.log("Logado com sucesso!");
             session.put('nome', usuario.nome);
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

    async bemVindo({view, session, response}) {
        const nome = session.get('nome');
        if(nome) { 
            return view.render('bemvindo', {nome: nome});
        }
        else {
            response.redirect('/');
        }
    }

}

module.exports = LoginController
