YeomanDemoKarma.Expense = DS.Model.extend({
  name: DS.attr("string"),
  value: DS.attr("number"),

  explained: function(){
    return this.get("name") + " -- " + this.get("value");
  }.property("name", "value")
});
