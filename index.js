const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'form',
});

app.post('/create',(req,res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const edad=req.body.edad;

    db.query('INSERT INTO usuarios(nombre,apellido,edad) VALUES (?,?,?)',[nombre,apellido,edad],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('usuarios registrados');
        }
    })
})
     
app.put('/update',(req,res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const edad=req.body.edad;
    const id=req.body.edad;

    db.query('UPDATE usuarios SET nombre=?, apellido=? ,edad=?  WHERE id=?',[nombre,apellido,edad],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('usuarios actualizado');
        }
    })
})

    app.listen(3001,()=>{
        console.log('Corriendo en el puerto 3001')
    });
    
 app.get('/usuarios',(req,res)=>{
     db.query('SELECT * FROM usuarios',
    (err,result) =>{
        if(err){
            console.log(err);
         }else{
            res.send(result);
        }
     });
});


   //app.post('/create',(req,res)=>{
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const edad=req.body.edad;// 
    
    
    