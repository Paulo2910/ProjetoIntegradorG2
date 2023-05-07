const express = require('express'); // Importar os modulos usados  no codigo
const methodOverride = require('method-override');
const path = require("path")

// Configurar aplicação
const app = express(); // Guarda a execução do express.
const PORT = process.env.PORT || 3000;
const indexRouter = require('./router/indexRouter');
const indexAdm = require('./router/indexAdm');
const users = require('./router/users');
const menu = require('./router/menu');
const logMiddleware = require('./middlewares/authentication')
require('./database'); // Nova configuração

app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(logMiddleware)

// Importar as rotas
app.use('/', indexRouter);
app.use('/administrador', indexAdm);
app.use('/usuarios', users)
app.use('/cardapios', menu)

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static(path.join(__dirname, "public")))//Importando a pasta Public ativando o CSS.


//Subir Aplicação
app.listen(PORT, () => console.log(`Server Connection in Port ${PORT}`));


