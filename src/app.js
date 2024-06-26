const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Defining paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index')
})

app.get('/*',(req,res) => {
    res.render('index')
})

app.listen(8000, ()=> {
    console.log('Server is up on port 8000.')
})