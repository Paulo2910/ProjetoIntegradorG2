const cardapioController = {
    menu: (req, res ) => { 
        res.render('PageMenu', {
            titulo: 'Cardápio',
            
        
        
        })
    }
}

module.exports = cardapioController;