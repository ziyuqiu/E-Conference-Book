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

Router.route('/people',{name:'people'});

Router.route('/registration',{name:'registration'});

Router.route('/updates',{name:'updates'});

Router.route('/game',{name:'game'});

Router.route('/product',{name:'product'});

Router.route('/information',{name:'information'});

Router.route('/time',{name:'time'});

Router.route('/diy',{name:'diy'});

Router.route('/relax',{name:'relax'});

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
