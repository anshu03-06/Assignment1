const express=require("express");
const cors=require("cors");
const route= require("./Route/route");

const app=express();

app.use(cors());

app.use(express.json());
// app.use(cors(
//     {
//       origin : 'https://time.com',
//       optionsSuccessStatus : 200,
//       credentials : true
//   }
//   ));

  app.use('/',route);

app.get('/',(req,res)=>{
    res.json("Heard")
});


app.listen(3000, ()=>console.log("Listening at port 3000"));