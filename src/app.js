
import express from "express";
import cors from "cors";
import { welcomPage } from "./template.js";

const app = express();
const PORT = 8080;

const envTest = process.env.TEST_ENV || "no access"

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:['*'],
    credentials:true
}));


app.get("/",(req,res)=>{

    res.send(welcomPage)

})



app.get("/login",(req,res)=>{

    res.send(`
        <h1 style="color:red">
         Login to access your account ${envTest} .
        </h1>
        `)

})
app.get("/signup",(req,res)=>{

    res.send(`
        <h1 style="color:red">
         Create an account .
        </h1>
        `)

})


app.listen(PORT,()=>console.log(`server running on ${PORT}`))
