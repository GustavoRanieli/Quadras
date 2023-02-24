const express = require('express')
const app = express()
const env = require('dotenv')
env.config()

app.set('view engine', 'ejs')
app.set('views', './public/view')

app.use('/public/script', express.static('./public/script'))
app.use('/public/style', express.static('./public/style'))

app.get('/', ( req, res ) =>{
    res.render('index')
})

app.listen(process.env.PORT, (err) => {
    if(err) console.log('Erro ao abrir o serve')
    console.log('Serve Aberto')
})