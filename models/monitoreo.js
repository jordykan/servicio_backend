import moongose, {Schema} from 'mongoose'

const monitoreoSchema = new Schema ({
    servicio : {type:Schema.ObjectId,ref:'confirmarServicio', required:true, unique:true},
    movimientos:[{
        color:{type:String, required:true},
        fecha:{type:String},
        tipoMovimiento:{type:String, required:true},
        detalles:{type:String, required:true}
    }],
    estado : {type:Number, default:0},
    createdAt : {type:Date, default:Date.now}

})

const Monitoreo = moongose.model('monitoreo',monitoreoSchema)
export default Monitoreo