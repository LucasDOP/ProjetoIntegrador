const jwt = require('jsonwebtoken');
require ('dotenv').config();

function jwtTokens ({login_id,username,senha}) {
    const user = {login_id,username,senha};
    const acessToken = jwt.sign (user, process.env.ACCESS_TOKEN_SECRET);
    const refreshToken = jwt.sign (user, process.env.REFRESH_TOKEN_SECRET);
    return ({acessToken, refreshToken});
    
}

function authenticationToken (req, res, next){
    const authHeader = req.headers['authorization']; //bearer token
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null)return res.status(401).json({error: "token vazio"})
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(error,user) => {
        if(error)return res.status(403).json({error: error.message});
        req.user = user;
        next();
    })
}


module.exports ={jwtTokens, authenticationToken};