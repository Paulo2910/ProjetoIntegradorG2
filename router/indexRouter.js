const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.render ('index'));

router.get('/detalhes', (req, res) => res.render('./views/detalhesProdutos'));

module.exports = router;