YeomanDemoKarma.ExpensesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('expense');
  }
});
