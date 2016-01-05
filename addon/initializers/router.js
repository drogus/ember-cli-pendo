import Ember from 'ember';

export function initialize() {
  Ember.Router.reopen({
    pendoPageLoad: function() {
      window.pendo.pageLoad();
    }.on('didTransition')
  });
}
