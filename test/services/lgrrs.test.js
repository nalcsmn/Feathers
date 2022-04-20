const assert = require('assert');
const app = require('../../src/app');

describe('\'LGRRS\' service', () => {
  it('registered the service', () => {
    const service = app.service('lgrrs');

    assert.ok(service, 'Registered the service');
  });
});
