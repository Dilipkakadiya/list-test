const json = require('json-server');

module.exports = {
  devServer: {
    before: function(app) {
      app.use('/api', json.router('src/assets/db.json'));
    }
  }
};