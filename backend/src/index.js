const express=require('express');
const cors=require('cors');
const calculateRoute=require('./routes/calculateRoutes');

const app=express();

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Everything in backend is working fine !')
})


app.use('/api/calculate',calculateRoute);

app.listen(3000,()=>{
    console.log('server is listening on port 3000');
})