Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/contact', {name: 'contact'});

Router.route('/memory',{name:'memory'});

Router.route('/schedule',{name:'schedule'});

Router.route('/schedule/edit',{name:'editSchedule'});

Router.route('/dictate', {name: 'dictation'});

Router.route('/speak', {name: 'speech'});

Router.route('/people',{name:'people'});

Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
