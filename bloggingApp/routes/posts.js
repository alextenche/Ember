Blogger.PostsRoute = Ember.Route.extend({
	controllerName: 'posts',
	rederTemplate: function(){
		this.render('posts');
	},
	model: function(){
		return this.store.find('post');
	}
});