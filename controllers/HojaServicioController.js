import models from '../models';

export default {
    add: async(req,res,next)=>{
        try{
            const reg = await models.HojaServicio.create(req.body);
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
            const reg = await models.HojaServicio.findOne({servicio:req.query.servicio})
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
            const reg = await models.HojaServicio.find()
            .sort({'createdAt':-1})
            .populate('servicio');
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
            const reg = await models.HojaServicio.findByIdAndUpdate({_id:req.body._id},{servicio:req.body.servicio,inicioServicio:req.body.inicioServicio,
             finalServicio: req.body.finalServicio, tipoServicio: req.body.tipoServicio,tipoMaterial:req.body.tipoMaterial,detalles:req.body.detalles,
            soporteUrl: req.body.soporteUrl
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
            const reg = await models.OfHire.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.HojaServicio.findByIdAndUpdate({_id:req.body._id});
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
            const reg = await models.HojaServicio.findByIdAndUpdate({_id:req.body._id});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
}