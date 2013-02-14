DS.Validations.validators        = Ember.Namespace.create();
DS.Validations.validators.local  = Ember.Namespace.create();
DS.Validations.validators.remote = Ember.Namespace.create();

require('ember-data-validations/validators/acceptance');
require('ember-data-validations/validators/confirmation');
require('ember-data-validations/validators/exclusion');
require('ember-data-validations/validators/format');
require('ember-data-validations/validators/inclusion');
require('ember-data-validations/validators/length');
require('ember-data-validations/validators/numericality');
require('ember-data-validations/validators/presence');
require('ember-data-validations/validators/uniqueness');
