YeomanEmber.Router.map(function () {
  
  this.resource('expenses', function(){
    this.resource('expense', { path: '/:expense_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
