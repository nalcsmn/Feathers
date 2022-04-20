const { Service } = require('feathers-knex');

exports.Lgrrs = class Lgrrs extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'lgrrs'
    });
  }
};
