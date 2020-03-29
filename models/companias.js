import mongoose,{Schema} from 'mongoose'

const CompaniaSchema = new Schema({
    cia:{type:String,unique:true, required:true},
    representante:{type:String,required:true},
    rfc:{type:String, required:true},
    estado:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now}
})

const compania = mongoose.model('compania',CompaniaSchema);
export default compania;