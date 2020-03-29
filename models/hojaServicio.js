import moongose, {Schema} from 'mongoose'

const hojaServicioSchema = new Schema({
    servicio: {type:Schema.ObjectId, ref:'confirmarServicio', required:true,unique:true},
    usuario: {type:Schema.ObjectId, ref:'usuario', required:true},
    estado: {type:Number, default:true},
    createdAt: {type:Date, default:Date.now},
    inicioServicio: {type:Date, required:true},
    finalServicio: {type:Date, required:true},
    tipoServicio: {type:String, required:true},
    servicioLog: {type:String, required:true},
    tipoServicioDescripcion:{type:String},
    servicioMaterialDescripcion:{type:String,required:true},
})

const hojaServicio = moongose.model('hojaservicio', hojaServicioSchema)
export default hojaServicio