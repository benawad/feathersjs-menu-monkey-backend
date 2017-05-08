'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const hooks = require('feathers-authentication-hooks');

const addCreatedAt = require('../../hooks/add-created-at');

const addOwnerId = require('../../hooks/add-owner-id');

module.exports = {
  before: {
    all: [  ],
    find: [

    ],
    get: [

    ],
    create: [authenticate('jwt'), addCreatedAt(), addOwnerId()],
    update: [
      authenticate('jwt'),
    ],
    patch: [
      authenticate('jwt'),
    ],
    remove: [
      authenticate('jwt'),
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
