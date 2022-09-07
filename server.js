const express = require('express')
const cors = require('cors')
const {squareTheNum} = require('./middlewares/validate-number')
const handleError = require('./error-handlers/500')

const app = express()


app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send('Hello Home')
})

app.get('/square',squareTheNum,(req,res)=>{
    res.status(200).json({
        num : req.num
    })
})

app.use(handleError)

function start(port) {
    app.listen(port, ()=>{
        console.log(`Helllo the server is Running ..... ${port} `)
    })
}

module.exports = {
    app,
    start

}