const json = require('json-server');

module.exports = {
  mode: 'production',
  devServer: {
    before: function (app) {
      app.use('/api', json.router('src/assets/db.json'));
    }
  }
};