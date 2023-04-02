const accountController = {
    account: (req, res) => {
        res.render('PageAccount',{
            titulo: 'Pagina do Usuário'
        })
    }
};

module.exports = accountController;