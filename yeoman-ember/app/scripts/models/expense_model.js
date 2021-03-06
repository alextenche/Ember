/*global Ember*/
YeomanEmber.Expense = DS.Model.extend({
    name: DS.attr('string'),

    value: DS.attr('number')
});

// probably should be mixed-in...
YeomanEmber.Expense.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
YeomanEmber.Expense.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    value: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    value: 'foo'
    
  }
  
];
