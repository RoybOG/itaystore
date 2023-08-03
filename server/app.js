import express from "express";
import { getProduct,getAllProductNames } from "./DB/DBConfig.js";

const app = express()
app.get('/',(req,res)=>{
    res.send('howdy hacker')
})
app.get('/getAllProductNames/',async (req,res)=>{
    const productNames = await getAllProductNames()
    res.send(productNames)
})
app.get('/getProduct/:userStr',async (req,res)=>{
    const userStr = req.params.userStr
    const wantedProduct = await getProduct(userStr)
    res.send(wantedProduct)
})

app.listen(8080,()=>{console.log('server running on 808')})