'use strict';

const assert = require('assert');
const process = require('../../../../src/services/recipe/hooks/process.js');

describe('recipe process hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {
        user: {
          _id: '12983791'
        }
      },
      result: {},
      data: {
        name: 'Tikka Masala',
        imageURL: 'http://...',
        ingredients: ['Tomatoes', 'Garam Masala'],
        description: 'Toss everything in a pot and cook!'
      }
    };

    process()(mockHook);
    assert.ok(mockHook.data);
  });
});
