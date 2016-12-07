import Ember from 'ember';

export default Ember.Service.extend({
  absoluteDifference(numberOne, numberTwo) {
    return Math.abs(parseInt(numberOne) - parseInt(numberTwo));
  }
});
