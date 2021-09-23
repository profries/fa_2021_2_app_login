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

    async salvar ({request, response}) {
        const produto = new Produto();
        produto.nome = request.input('nome');
        produto.preco = request.input('preco');
        produto.categoria = request.input('categoria');

        await produto.save();

        return response.redirect('/produtos');
    }
}

module.exports = ProdutoController;


