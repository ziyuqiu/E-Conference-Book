Template.schedule.helpers({
   schedules: function(){
   		return Schedules.find({},{sort:Session.get('dateSort')});
   }

})

Template.schedule.events({
	'click #Default':function(event){
			event.preventDefault();
			Session.set('dateSort',{Date:1,Time:1});
	},
	'click #Recent':function(event){
			event.preventDefault();
			Session.set('dateSort',{Date:-1,Time:-1});
	}
})

Template.checkbox.events({
  'k_elbuilt input': function() {
    console.log('k_elbuilt event');
  },

  'k_checked input': function() {
    console.log('k_checked event');
  },

  'k_unchecked input': function() {
    console.log('k_unchecked event');
  }
});

Template.scheduleRow.events({
	"click .jbsapp-delete-icon": function(){Schedules.remove(this._id);}
})
 


/*Template.schedule.events(
	{ 
		'click .schedules': function(){
			var scheduleID = this._id; 
			Session.set('selectedPlayer', scheduleID);
			var selectedPlayer = Session.get('selectedPlayer');
		}
	}
);


Template.schedule.helpers({ 'player': function(){
	return PlayersList.find() },
	'selectedSchedule': function(){ 
		return “selected”;
	}
});
*/