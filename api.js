const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
var Redoid = require('redoid');
var redoid = Redoid({
    color: '#ffffff'
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  console.log(req.body)

  redoid.transition(req.body.color, req.body.duration);
  res.send(req.body)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
