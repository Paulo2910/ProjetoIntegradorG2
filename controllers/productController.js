const produtosController = {
    product: (req, res ) => { 
        res.render("PageDetails", {
            titulo: 'Produto'   
            
        })// Fiz uma mudança nesse código deixei dinâmico o nome da página.
    }
}

module.exports = produtosController;