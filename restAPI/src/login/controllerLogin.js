
const pool = require('../../db');
const queries = require('./queriesLogin');
require ('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtTokens, authenticationToken } = require('../../jwt');
const { header } = require('express/lib/request');
const LocalStrategy = require('passport-local').Strategy;



// config jason response



  
 

//const getUsuario = (req, res) => {
 // pool.query(queries.getUsuario, (error, results) => {
  //    if (error) throw error;
  //    res.status(200).json(results.rows);
  //})
//}


//const getUsuarioByUsuario = (req, res) => {
 // const username =  parseInt(req.params.username);
 // pool.query(queries.getUsuarioByUsuario, [username], (error, results) => {
 //   if (error) throw error;
  //  res.status(200).json(results.rows);

 //// })
//}

/*const getUsuarioByUsuario = (req, res) => {
  const username = parseInt(req.params.username);

  pool.query(queries.getUsuarioByUsuario, [ username], (error, results) => {
      const noClienteFound = !results.rows.length;
      if(noClienteFound){
         return res.status(422).json({ msg: 'No cliente found'})
      }
      else{ pool.query(queries.getUsuarioByUsuario, [ username], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })}
     
       

     
  })
}*/

const getUsuario = async (req, res) => {
  const{username} =  req.body;
  const {senha} =  req.body;
  const login = await pool.query(queries.getUsuario)
  //checar se email e senha não são vazios
  if(!username){
    return res.status(422).json({ msg: 'insira um usuario'})

  }

  if(!senha){
    return res.status(422).json({ msg: 'Insira uma senha'})
  }

   if ( !  pool.query(queries.getUsuarioByUsuario, [ username]))
   {
    return res.status(404).json({ msg: 'Usuario não encontrado'})
  }

  if (!  pool.query(queries.getUsuarioBySenha, [senha]) ) {
    return res.status(404).json({ msg: 'senha invalida'})
  }
 
   
 // if (!usuarioExists){
  //  return res.status(404).json({ msg: 'Usuario não encontrado'})
 // }

  
 // const senhaExists = await pool.query(queries.getUsuarioBySenha, [senha]);
 // if (!senhaExists){
  //  return res.status(404).json({ msg: 'senha invalida'})

 // }
 
  // checar se usuario e senha existem no banco de dados
 

// pool.query(queries.getUsuarioBySenha, [senha], (error

 // })

  const user = await pool.query('SELECT * FROM login WHERE username = $1',[username]);

  try {
    let tokens = jwtTokens(user.rows[0]);
    res.cookie('refresh_token', tokens.refresh_token, {httpOnly: true});
    res.json(tokens);
    console.log('sucesso');
    return res.status(200).json({user});

  }catch(error){
    console.log(error)
    res.status(500).json({ msg: 'erro no servidor.'})
  }

 
}







function checkToken (req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if(!token) {
    return res.status(401).json({ msg: "acesso negado"})
  }

  try{

    const secret = process.env.ACCESS_TOKEN_SECRET
    jwt.verify(token, secret);
    next();

  }catch (error){
    res.status(400).json({ msg: "token invalido!"})

  }
}





const getUsuarioByUsuario = (req, res) => {
  const{username, senha } = req.body;
  const login =  pool.query(queries.getUsuario)
  //checar se email e senha não são vazios
  if(!username){
    return res.status(422).json({ msg: 'insira um usuario'})

  }

  if(!senha){
    return res.status(422).json({ msg: 'Insira uma senha'})
  }

  // checar se usuario e senha existem no banco de dados
 pool.query(queries.getUsuarioByUsuario, [ username], (error, results)=>{
   const userExists = results.rows.length;
   if(!userExists){
    return res.status(404).json({ msg: 'Usuario não encontrado'})
  }
  })

  pool.query(queries.getUsuarioBySenha, [senha], (error, results)=>{
    const senhaExists = results.rows.length;
    if(!senhaExists){
      return res.status(404).json({ msg: 'Senha invalida.'})
    }
  })

  const user =  pool.query('SELECT * FROM login WHERE username = $1',[username]);

  try {
   return res.status(200).json({user})
  }catch(error){
    console.log(error)
    res.status(500).json({ msg: 'erro no servidor.'})
  }

}
  
 
module.exports = {
    getUsuarioByUsuario,
    getUsuario,
    
  
    
};