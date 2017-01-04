'use strict';

// src/services/recipe/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

const Ajv = require('ajv');
const ajv = new Ajv(); 
const schema = {
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string'
    },
    'imageURL': {
      'type': 'string'
    },
    'ingredients': {
     'type': 'array',
      'items': {
        'type': 'string'
      }
    },
    'description': {
      'type': 'string'
    }
  },
  'required': [
    'name',
    'imageURL',
    'ingredients',
    'description'
  ],
  'additionalProperties': false
};
const validate = ajv.compile(schema);

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const valid = validate(hook.data);
    if (!valid) {
      throw new Error('Invalid json');
    }
    hook.data = Object.assign({}, hook.data, {
      createdAt: new Date().getTime(),
      ownerId: hook.params.user._id,
    });
  };
};
