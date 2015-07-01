describe("Expense", function(){
  it("explain itself", function(){
    Ember.run(function(){
        var store = YeomanDemoKarma.__container__.lookup("store:main");
        var expense = store.createRecord("expense", {
          name: "My Expense",
          value: 2000
        });

        expect(expense.get("explained")).to.equal("My Expense -- 2000");
    });

  });
});
