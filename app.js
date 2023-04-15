const express = require('express'); // Importar os modulos usados  no codigo
const path = require("path")

// Configurar aplicação
const app = express(); // Guarda a execução do express.
const PORT = process.env.PORT || 3000;
const indexRouter = require('./router/indexRouter');
const users = require('./router/users');
const menu = require('./router/menu');
require('./database'); // Nova configuração

app.use(express.json());
app.use(express.urlencoded());

// Importar as rotas
app.use('/', indexRouter);
app.use('/', users)
app.use('/cardapios', menu)

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static(path.join(__dirname, "public")))//Importando a pasta Public ativando o CSS.

//Subir Aplicação
app.listen(PORT, () => console.log(`Server Connection in Port ${PORT}`));


