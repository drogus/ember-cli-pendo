import Ember from 'ember';

export function initialize() {
  Ember.Router.reopen({
    pendoPageLoad: function() {
      if(window.pendo) {
        window.pendo.pageLoad();
      }
    }.on('didTransition')
  });
}
