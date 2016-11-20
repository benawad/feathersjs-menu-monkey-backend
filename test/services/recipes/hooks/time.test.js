'use strict';

const assert = require('assert');
const time = require('../../../../src/services/recipes/hooks/time.js');

describe('recipes time hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    time()(mockHook);

    assert.ok(mockHook.time);
  });
});
