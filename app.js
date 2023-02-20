const express = require('express');


const app = express()

app.use(express.json())



app.get('/', (req, res) =>{
    res.status(200).json({message:'welcome'})
})


const server = app.listen(2500, ()=>{
    console.log('app is listening')
})

module.exports = server