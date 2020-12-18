const json = require('json-server');

module.exports = {
  mode: 'production',
  devServer: {
    before: function(app) {
      app.use('/api', json.router('https://pedantic-galileo-1263ff.netlify.app/assets/db.json'));
    }
  }
};