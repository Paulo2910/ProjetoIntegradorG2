const cartController = {
    cart: (req, res) => {

        res.render("PageCart", {
            titulo: 'Carrinho'
        })
    }
}

module.exports = cartController