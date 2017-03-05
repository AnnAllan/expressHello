const express = require('express')
const app = express()
app.set('view engine', 'hbs')
app.use(function (req, res, next) {
    console.log(req.url + ' — ' + new Date())
    next()
  })

app.get('/', function (req, res) {
  res.render('hello', { name: 'Viking' })
})
app.get('/names/:name', function (req, res) {
  const name = req.params.name
  res.render('hello', { name: name })
})
const port = process.env.PORT || '3000'

app.listen(port, function () {
  console.log('Odin is listening on port 3000')
})
