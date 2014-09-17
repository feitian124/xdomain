import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationSucceeded: function() {
      var _this = this;
      var user = this.store.find('user', 1);
      this.transitionTo('index');
      user.then(function(data){
        _this.controllerFor('index').set('content', data);
      });
    },

    sessionAuthenticationFailed: function(error) {
      console.log('sessionAuthenticationFailed:', error.message);
    }
  }
});
