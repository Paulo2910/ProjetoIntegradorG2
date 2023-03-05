const accountController = {
    account: (req, res) => {
        res.render('PageAccount',{
            titulo: 'Pagina do Usuario'
        })
    }
};

module.exports = accountController;