import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    updateName: function() {
      var randomId = Math.ceil(Math.random()*1000);
      var _this = this;
      this.store.find('user', randomId).then(function(data){
        _this.set('content', data);
      });
    }
  }
});
