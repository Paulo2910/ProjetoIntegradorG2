const chekoutController = {
    chekout: (req, res) => {

        res.render("PageChekout", {
            titulo: 'Finalizar Pedido'
        })
    }
}

module.exports = chekoutController;