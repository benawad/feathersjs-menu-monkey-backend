'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'recipes.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 10,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/recipes', service(options));

  // Get our initialize service to that we can bind hooks
  const recipeService = app.service('/recipes');

  // Set up our before hooks
  recipeService.before(hooks.before);

  // Set up our after hooks
  recipeService.after(hooks.after);
};
