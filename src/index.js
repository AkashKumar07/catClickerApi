const express = require('express');
require('./db/mongoose');

const catRouter = require('./routers/cats');

const app = express();

const port = process.env.port || 3000;

app.use(express.json());
app.use(catRouter);

app.listen(port, () =>{
    console.log('server is up on port '+ port );
})