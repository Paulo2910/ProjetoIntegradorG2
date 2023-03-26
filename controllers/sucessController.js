const sucessController = {
    sucess: (req, res) => res.render("PageSucess", {
            titulo: 'Compra Efetuada'
        }
    )
};

module.exports = sucessController;