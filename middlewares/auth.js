import tokenService from '../services/token';
export default{
    verifyUsuario: async(req,res,next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'administrador' || response.rol == 'comercial' || response.rol == 'logistico' || response.rol == 'terrestre'){
            next();
        }else{
            return res.status(403).send({
                message: 'no autorizado'
            })
        }

    },
    verifyAdministrador: async(req,res,next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'administrador'){
            next();
        }else{
            return res.status(403).send({
                message: 'no autorizado'
            })
        }
    },
    verifyComercial: async(req,res,next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'comercial' || response.rol == 'logistico' || response.rol == 'administrador'){
            next();
        }else{
            return res.status(403).send({
                message: 'no autorizado'
            })
        }
    },
    verifyLogistica: async(req,res,next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'logistico' || response.rol == 'administrador'|| response.rol == 'comercial'){
            next();
        }else{
            return res.status(403).send({
                message: 'no autorizado'
            })
        }
    },
    verifyLogisticaTerrestre: async(req,res,next) =>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'terrestre' || response.rol == 'administrador'){
            next();
        }else{
            return res.status(403).send({
                message: 'no autorizado'
            })
        }
    },
}