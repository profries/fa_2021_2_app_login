'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController {
    async index({view}) {

        const produtos = await Produto.all();

        return view.render('produtos.tabela', { produtos: produtos.toJSON()});
    }

    async criar({view}) {
        return view.render('produtos.formulario');
    }

    async 
}

module.exports = ProdutoController;


