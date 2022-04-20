// Initializes the `LGRRS` service on path `/lgrrs`
const { Lgrrs } = require('./lgrrs.class');
const createModel = require('../../models/lgrrs.model');
const hooks = require('./lgrrs.hooks');

module.exports = function (app) {
  const options = {
    id: 'SZSTUID',
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/lgrrs', new Lgrrs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('lgrrs');

  service.hooks(hooks);
};
