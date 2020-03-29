import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'
import mongoose from 'mongoose';
import router from './routes'

const app = express();
const dbUrl = 'mongodb://localhost:27017/servicios'

mongoose.Promise=global.Promise;
mongoose.connect(dbUrl, {useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology: true})
.then(mongoose => console.log('Conectando a la BD en el puerto 27017'))
.catch(err => console.log(err));

app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/api',router)
app.set('port',process.env.PORT || 3001);

app.get('/hola',(req,res)=>{
    res.send('hello')
})

app.listen(app.get('port'),()=>{
    console.log('listen on server' + app.get('port'));
});