
const {Router} = require('express');
const { authenticationToken } = require('../../jwt');
const controllerLogin = require('./controllerLogin');

const router = Router();

router.post("/user/", authenticationToken, controllerLogin.getUsuarioByUsuario);
router.post("/", controllerLogin.getUsuario);

//router.get("/:senha,", controllerLogin.getUsuarioBySenha);



module.exports = router;