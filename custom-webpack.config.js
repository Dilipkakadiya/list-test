const json = require('json-server');

module.exports = {
  devServer: {
    before: function(app) {
      app.use('/api', json.router('https://pedantic-galileo-1263ff.netlify.app/assets/db.json'));
    }
  }
};