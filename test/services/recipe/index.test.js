'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('recipe service', function() {
  it('registered the recipes service', () => {
    assert.ok(app.service('recipes'));
  });
});
