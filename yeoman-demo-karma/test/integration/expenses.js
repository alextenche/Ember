describe("Expenses", function(){

  it("display a message for when there are no expenses", function(){
    YeomanDemoKarma.reset();
    YeomanDemoKarma.Expense.FIXTURES = [];

    visit('/expenses').then(function(){
      find('.no-expenses').text().should.contain('There are no expenses');
    });
  });

  it("display a list of expenses", function(){
    YeomanDemoKarma.reset();
    YeomanDemoKarma.Expense.FIXTURES = [
      { id: 1, name: 1, value: 10 },
      { id: 2, name: 2, value: 20 },
      { id: 3, name: 3, value: 30 },
      { id: 4, name: 4, value: 40 },
      { id: 5, name: 5, value: 50 },
    ];
    visit('/expenses').then(function(){
      find("tbody tr").length.should.eq(5);
    });
  });
});
