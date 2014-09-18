import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    getUser: function() {
      var randomId = Math.ceil(Math.random()*1000);
      var _this = this;
      this.store.find('user', randomId).then(function(data){
        _this.set('content', data);
      });
    },
    updateUser: function() {
      this.set('username', 'changed-by-updateUser');
      var user = this.get('model');
      user.save();
    },
    createUser: function() {
      var name = 'localName' + Math.ceil(Math.random()*1000);
      var user = this.store.createRecord('user',{
        username: name
      });
      this.set('model', user);
      user.save();
    },
    deleteUser: function() {
      var user = this.get('model');
      user.deleteRecord();
      user.save();
    },
  }
});
