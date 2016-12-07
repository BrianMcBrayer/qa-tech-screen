import Ember from 'ember';

export default Ember.Component.extend({
  componentSeed: Math.ceil(Math.random() * 100),
  numberOne: 2,
  numberTwo: 2,
  calculationEngine: Ember.inject.service('calculation-engine'),
  actions: {
    absoluteDifference() {
      var sum = this.get('calculationEngine').absoluteDifference(this.get('numberOne'), this.get('numberTwo'));
      this.set('sum', sum);
    }
  }
});
