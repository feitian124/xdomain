import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user', 1);
    /*
    return this.store.createRecord('user', {
      name: 'localSideName'
    })
    */
  }
});
