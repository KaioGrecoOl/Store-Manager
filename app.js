const express = require('express');
const routers = require('./routers/Products');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/products', routers);

app.use('/:id', routers);

app.use('/products', routers);

app.use('/:id', routers);

app.use('/:id', routers);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;