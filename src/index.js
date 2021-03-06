const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const catRouter = require('./routers/cats');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(catRouter);

app.listen(port, () =>{
    console.log('server is up on port '+ port );
})