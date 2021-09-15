'use strict'

class LoginController {
    async index({view,session}) {
        let username = session.get('username', '');
        return view.render('index', {user: username});
    }

    async login({response, session}) {
        let username = session.get('username', '');
        if(username) {
            session.clear();
        }
        else { 
            session.put('username','Fulano');
        }        
        response.redirect('back');
    }

}

module.exports = LoginController
