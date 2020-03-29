import moongose, {Schema} from 'mongoose'

const AgenciaSchema = new Schema({
    agencia: {type:String,unique:true,required:true},
    representante: {type:String,required:true},
    rfc:{type:String,required:true},
    estado:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now}
})

const agencia = moongose.model('agencia',AgenciaSchema)
export default agencia;