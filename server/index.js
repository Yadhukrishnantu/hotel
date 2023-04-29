const dataService = require("./service/dataservice.js")

// import cors
const cors=require("cors")
 
// import json web token
// const jwt= require('jsonwebtoken')

// import express

const express = require("express")

// create app using express

const app = express()

// connection string to frontend integration
app.use(cors({origin:'http://localhost:4200'}))

// to parse json data from req body
app.use(express.json())




app.post('/login', (req, res) => {
    dataService.login( req.body.uname, req.body.psw).then(result=>{
       res.status(result.statusCode).json(result)
   })
   
   

   

})
app.post('/register', (req, res) => {
    dataService.register(req.body.uname, req.body.Email, req.body.psw).then(result=>{
       res.status(result.statusCode).json(result)
   })
  

})

app.get('/viewHotels',(req,res)=>{
    dataService.viewHotels().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/roomDetails',(req,res)=>{
    dataService.roomDetails(req.body.hotelId).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/bookHotel',(req,res)=>{
    dataService.bookHotel(req.body.hotelData,req.body.Email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/bookedroom',(req,res)=>{
    dataService.bookedroom(req.body.Email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen(3000, () => { console.log("server started at port number 3000"); })

