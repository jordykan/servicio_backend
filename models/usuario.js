import mongoose, {Schema} from 'mongoose';
const usuarioSchema = new Schema({
    rol:{type:String,maxlength:30,required:true},
    puesto:{type:String,maxlength:30,required:true},
    departamento:{type:String,maxlength:30,required:true},
    nombre:{type:String,maxlength:50,required:true},
    email:{type:String,maxlength:50,required:true,unique:true},
    telefono:{type:String, maxlength:20},
    password:{type:String,maxlength:64,required:true},
    estado:{type:Number,default:1},
    createdAt:{type:Date, default:Date.now}
});

const Usuario = mongoose.model('usuario',usuarioSchema);
export default Usuario;