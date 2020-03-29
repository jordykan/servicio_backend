import moongose,{Schema} from 'mongoose';

const ConfirmarServicioSchema= new Schema({
    cia : {type:Schema.ObjectId, ref:'compania',required:true},
    embarcacion : {type:Schema.ObjectId, ref:'embarcacion',required:true},
    agencia : {type:Schema.ObjectId, ref:'agencia',required:true},
    usuario: {type:Schema.ObjectId, ref:'usuario',required:true},
    onhire : {type:Date},
    muelle: {type:String},
    programa: {type:String},
    detalles: {type:String, required:true},
    estado: {type:Number, default:0},
    tipo_servicio: {type:String},
    url_cotizacion: {type:String,unique:true},
    url_soporte: {type:String},
    createdAt: {type:Date, default:Date.now}
})


const confirmacionServicio = moongose.model('confirmarServicio',ConfirmarServicioSchema);
export default confirmacionServicio