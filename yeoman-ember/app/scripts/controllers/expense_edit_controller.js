YeomanEmber.ExpenseEditController = Ember.ObjectController.extend({
  needs: 'expense',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.expense.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('expense',this.get('model'));
    }
  }
});

