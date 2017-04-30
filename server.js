require('dotenv').config();
const objectAssign = require('object-assign');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

if (process.env.NODE_ENV == "development") {
  app.set('port', (process.env.DEVELOPMENT_PORT || 8000))
}

if (process.env.NODE_ENV == "staging") {
  app.set('port', process.env.STAGING_PORT)
}

if (process.env.NODE_ENV == "production") {
  app.set('port', process.env.PRODUCTION_PORT)
}

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

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})