


const express = require('express');

const jwt = require('jsonwebtoken');
const { jwtTokens } = require('./jwt');
const pool = require('./db');




const ClienteRoutes = require('./src/cliente/routes');

const LoginRoutes = require('./src/login/routes');

const app = express();
const port = process.env.port || 3000; 

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.use('/api/v1/cliente', ClienteRoutes);

app.use('/api/v1/login', LoginRoutes);





app.listen(port, () => console.log(`app listening on port ${port}`));