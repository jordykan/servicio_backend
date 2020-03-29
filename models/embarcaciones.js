import mongoose,{Schema} from 'mongoose';

const embarcacionSchema = new Schema({
    nombre:{type: String, unique:true,required:true},
    tipo:{type:String, required:true},
    armador:{type:String, required:true},
    eslora:{type:Number,required:true},
    manga:{type:Number,required:true},
    tbr:{type:Number,required:true},
    trb:{type:Number,required:true},
    calado:{type:Number,required:true},
    estado:{type:Number,default:0},
    createdAt:{type:Date, default:Date.now}
})

const Embarcacion = mongoose.model('embarcacion',embarcacionSchema);
export default Embarcacion;

