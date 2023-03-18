const accountController = {
    account: (req, res) => {
        res.render('PageAccount',{
            titulo: 'Usuário'
        })
    }
};

module.exports = accountController;