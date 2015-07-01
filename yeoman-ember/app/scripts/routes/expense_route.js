YeomanEmber.ExpenseRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('expense', params.expense_id);
  }
});

