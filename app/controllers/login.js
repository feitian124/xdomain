import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.ObjectController.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:oauth2-password-grant'
});
