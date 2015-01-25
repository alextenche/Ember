Blogger.PostsController = Ember.ArrayController.extend({
	sortProperties : ['id'],
	actions: {
		sortByTitle:  function(){
			this.set('sortProperties', ['title']);
		}
	}
});