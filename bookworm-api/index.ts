import express, { application } from "express";
const app =  express();
app.use(express.json())

const PORT = 3000 // TODO OR

app.get('./',(req, res)=>{
    console.log('Executing server...')
})