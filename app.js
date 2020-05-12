const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const activity = require('./routes/activity');
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.use('/activities', activity);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/', function(req, res) {
    res.send('OK');
});
