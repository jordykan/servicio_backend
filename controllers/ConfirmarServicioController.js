import models from '../models';

export default {
    add: async(req,res,next)=>{
        try{
            const reg = await models.ConfirmarServicio.create(req.body);
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    query: async(req,res,next)=>{
        try{
            const reg = await models.ConfirmarServicio.findOne({_id:req.query._id})
            .populate('embarcacion')
            .populate('agencia')
            .populate('compania')
            .populate('usuario')
            if(!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            }else{
                res.status(200).json(reg); 
            }
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    list: async(req,res,next)=>{
        try{
            let valor = req.query.valor;
            const reg = await models.ConfirmarServicio.find()
            .sort({'createdAt':-1})
            .populate('embarcacion')
            .populate('agencia')
            .populate('cia')
            .populate('usuario')  
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },

    listServicio: async(req,res,next)=>{
        try{
            let valor = req.query.valor;
            const reg = await models.ConfirmarServicio.find({estado:1,tipo_servicio:'Cabotaje'})
            .sort({'createdAt':-1})
            .populate('embarcacion')
            .populate('agencia')
            .populate('cia')
            .populate('usuario')  
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },

    listServicioTerrestre: async(req,res,next)=>{
        try{
            let valor = req.query.valor;
            const reg = await models.ConfirmarServicio.find({estado:1,tipo_servicio:'Terrestre'})
            .sort({'createdAt':-1})
            .populate('embarcacion')
            .populate('agencia')
            .populate('cia')
            .populate('usuario')  
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
  
    update: async(req,res,next)=>{
        try{
            const reg = await models.ConfirmarServicio.findByIdAndUpdate({_id:req.body._id},{cia:req.body.cia,embarcacion:req.body.embarcacion,
             agencia: req.body.agencia, onhire: req.body.onhire,muelle:req.body.muelle,programa:req.body.programa, detalles: req.body.detalles, tipo_servicio: req.body.tipo_servicio,
             url_cotizacion: req.body.url_cotizacion, url_soporte : req.body.url_soporte
            });
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async(req,res,next)=>{
        try{
            const reg = await models.ConfirmarServicio.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async(req,res,next)=>{
        try{
            const reg = await models.ConfirmarServicio.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg)

        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
    deactivate: async(req,res,next)=>{
        try{
            const reg = await models.ConfirmarServicio.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
}