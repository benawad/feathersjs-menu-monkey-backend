'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'recipes\' service', () => {
  it('registered the service', () => {
    const service = app.service('recipes');

    assert.ok(service, 'Registered the service');
  });
});
