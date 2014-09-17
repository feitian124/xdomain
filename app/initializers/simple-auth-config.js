export default {
  name: 'simple-auth-config',
  before: 'simple-auth',

  initialize: function() {
    window.ENV = window.ENV || {};
    window.ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: "http://192.168.0.112:3000/token",
      serverTokenRevokationEndpoint: "http://192.168.0.112:3000/revoke",
      refreshAccessTokens: true
    };
  }
};
