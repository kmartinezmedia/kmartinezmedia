require('dotenv').config();
const objectAssign = require('object-assign');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV == "development") {
  app.set('port', process.env.API_DEVELOPMENT_PORT);
    // prevent from throwing CORS error
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

if (process.env.NODE_ENV == "production") {
  app.set('port', process.env.API_PRODUCTION_PORT)
}


// airtable setup
const airtable = require('airtable');
airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_KEY
});

const airtableBase = airtable.base(process.env.AIRTABLE_BASE);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.disable('x-powered-by')


// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

// get work record from airtable with an id
app.get('/work/:id', function(req, res) {
  const id = req.params.id;
  airtableBase("work").find(id, function(err, record) {
    if (err) { console.error(err); return; }
    res.send(record)
  });
})


app.get('/:table', function(req, res) {

  const table = req.params.table;

  let sortQuery;

  if (req.query.hasOwnProperty('sort')) {
    const arrayOfSorts = req.query.sort.map((item, i) =>  JSON.parse(item))
    sortQuery = {
      sort: arrayOfSorts
    }
  }

  let filter;
  if (req.query.hasOwnProperty('filterByFormula')) {
    filter = {
      filterByFormula: req.query.filterByFormula
    }
  }

  const params = objectAssign({}, sortQuery, filter);

  airtableBase(table).select(params).firstPage(function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      res.send(records)
  });
})

// Additional middleware which will set headers that we need on each request.
app.post('/:table', function(req, res) {
  var table = req.params.table;
  airtableBase(table).create(req.body, {typecast: true}, function(err, record) {
    if (err) {
      console.error(err); return;
    }
    res.send(record.getId())
  })
})

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})