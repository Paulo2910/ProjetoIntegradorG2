const Category = require('../models/Category');
const Menu = require('../models/Menu');
//const { validationResult } = require('express-validator')//Método de validação dos inputs

async function pageCategory(req, res) {
    res.render('AdminCategoryCreate', {
        titulo: 'Cadastro de Categorias'
    })
}

async function listCategory(req, res) {
    const category = await Category.findAll({
        include: {
            model: Menu,
            required: true,
            as: 'category'
        }
    });
    console.log(category)

    res.render('AdminCategory', {
        category,
        titulo: 'Categorias'
    })
}

async function createCategory (req, res) {
    const {category, slug} = req.body;
    const createdCategory = await Category.create({ category, slug})
    console.log(createdCategory)

     return res.redirect('/administrador/lista-de-categorias')

}

async function editCategory(req, res) {
    const idCategory = req.params.id;
    const category = await Category.findByPk(idCategory)

    return res.render('AdminCategoryEdit', {
        category,
        titulo: `Editando Categorias`
    })

}

async function updateCategory(req, res) {
    const idCategory = req.params.id;
    const {category, slug} = req.body

    const toUpdate = await Category.update({
        category,
        slug,
    },
    {
        where: {
            id:idCategory
        }
    })

    console.log(toUpdate)
    return res.redirect('/administrador/lista-de-categorias')
}

async function destroyCategory(req, res) {
    const idToDelete =  req.params.id;

    await Category.destroy({
         where: {id: idToDelete} }
         
        );

    console.log(idToDelete)
    return res.redirect('/administrador/lista-de-categorias')
}

module.exports = {
    pageCategory,
    listCategory,
    createCategory,
    editCategory,
    updateCategory,
    destroyCategory
}
   

