'use strict';

const assert = require('assert');
const date = require('../../../../src/services/recipe/hooks/date.js');

describe('recipe date hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    date()(mockHook);

    assert.ok(mockHook.date);
  });
});
