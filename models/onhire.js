import mongoose, {Schema} from 'mongoose'

const onhireSchema = new Schema({
    servicio : {type:Schema.ObjectId, ref:'confirmarServicio',required:true,unique:true},
    usuario: {type:Schema.ObjectId, ref: 'usuario',required:true},
    estado: {type:Number, default:0},
    createdAt: {type:Date, default:Date.now},
    diesel: {type:Number, required:true},
    aceiteLubricante:{type:Number,required:true},
    aceiteLubricante2: {type:Number},
    aceiteHidraulico: {type:Number},
    aceiteEngranes: {type:Number},
    aguaPotable: {type:Number, required:true},
    onhire: {type:Date, required:true},
    consumibleAmls: {type:Number},
    consumibleCliente: {type:Number},
    soporteUrl: {type: String, required:true}

})

const onhire = mongoose.model('onhire',onhireSchema)
export default onhire