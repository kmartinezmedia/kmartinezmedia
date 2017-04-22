var path = require('path')
require('dotenv').config()

// We have to cheat on the zero config thing because React 15.3.0 has a couple
// of global "process" references left after eliminating process.env.NODE_ENV,
// which cause a process shim to be imported from node-libs-browser.

module.exports = {
  type: 'react-app',
  babel: {
    cherryPick: ['react-router']
  },
  webpack: {
    aliases: {
      'components': path.resolve('src/components'),
      'img': path.resolve('src/img'),
      'pages': path.resolve('src/pages'),
      'public': path.resolve('public'),
      'src': path.resolve('src'),
      'styles': path.resolve('src/styles')
    },
    define: {
      'process.env':{
        'GOOGLE_KEY_STAGING': JSON.stringify(process.env.GOOGLE_KEY_STAGING),
        'GOOGLE_KEY_PRODUCTION': JSON.stringify(process.env.GOOGLE_KEY_PRODUCTION)
      }
    },
    extra: {
      node: {
        process: false
      }
    },
    moment: {
      locales: ['en']
    },
  }
}
