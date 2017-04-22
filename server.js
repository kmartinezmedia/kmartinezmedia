require('dotenv').config();
const objectAssign = require('object-assign');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./config/staging-auth');
const app = express();

// airtable setup
const airtable = require('airtable');
airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_KEY
});
const airtableBase = airtable.base('appVoPpp0qlJnUtoq');

if (process.env.NODE_ENV == "development") {
  app.set('port', (process.env.DEVELOPMENT_PORT || 8000))
}

if (process.env.NODE_ENV == "staging") {
  // password protect staging server
  // uncomment to password protect
  // app.use(auth)
  app.set('port', process.env.STAGING_PORT)
}

if (process.env.NODE_ENV == "production") {
  app.set('port', process.env.PRODUCTION_PORT)
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.disable('x-powered-by')


// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.get('/airtable/:table', function(req, res) {
  const table = req.params.table;
  let sortQuery;
  if (req.query.hasOwnProperty('sort')) {
    const arrayOfSorts = req.query.sort.map((item, i) =>  JSON.parse(item))
    sortQuery = {
      sort: arrayOfSorts
    }
  }

  const params = objectAssign({view: 'Main View'}, sortQuery);
  airtableBase(table).select(params).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      res.send(records)
  });
})

// Additional middleware which will set headers that we need on each request.
app.post('/airtable/:table', function(req, res) {
  var table = req.params.table;
  airtableBase(table).create(req.body, {typecast: true}, function(err, record) {
    if (err) { 
      console.error(err); return; 
    }
    res.send(record.getId())
  })
})

try {
  fs.statSync('dist')
  console.log('Serving static build from dist/')
  console.log('Run `npm run clean` to return to development mode')
  app.use('/', express.static(path.join(__dirname, 'dist')));
  // if running from build send all routes to index html file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}
catch (e) {
  console.log('Serving development build with nwb middleware')
  console.log('Run `npm run build` to create a production build')
  app.use(require('nwb/express')(express))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
  });
}

// if use react router should remove this. what this does- defaults to index when trying to navigate to another url
// app.get('*', (req, res) => {
//   res.redirect('/')
// })

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})