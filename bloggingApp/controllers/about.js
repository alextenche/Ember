Blogger.AboutController = Ember.Controller.extend({
	isPictureShowing : false,
	actions:{
		showMoreInfo : function(){
			alert('the secreat of the universe is 42');
		},
		showPicture :function(){
			this.set('isPictureShowing', true);
		},
		hidePicture: function(){
			this.set('isPictureShowing', false);
		}
	}
});