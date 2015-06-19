Template.scheduleRow.events({
	"click .jbsapp-delete-icon": function(){Schedules.remove(this._id);}
})

Schedules.insert({Date:"June.1", Time: "15:00" ,Event:"Opening Ceremony",Room:"Volen 106",Speaker:"Timothy Hickey"});
Schedules.insert({Date:"June.1", Time: "17:00" ,Event:"Dinner",Room:"Usdan",Speaker:" "});
Schedules.insert({Date:"June.2", Time: "08:30" ,Event:"Session 1",Room:"Volen 106",Speaker:"Marie Meteer"});
Schedules.insert({Date:"June.2", Time: "10:00" ,Event:"Session 2",Room:"Volen 106",Speaker:"Marie Meteer"});
Schedules.insert({Date:"June.2", Time: "11:20" ,Event:"Lunch",Room:"Sherman",Speaker:" "});
Schedules.insert({Date:"June.2", Time: "14:00" ,Event:"Session 3",Room:"Volen 106",Speaker:"Timothy Hickey"});
Schedules.insert({Date:"June.2", Time: "15:30" ,Event:"Session 4",Room:"Volen 106",Speaker:" "});
Schedules.insert({Date:"June.2", Time: "17:00" ,Event:"Dinner",Room:"Usdan",Speaker:"Timothy Hickey"});
 
Template.schedule.helpers({
   schedules: Schedules.find().fetch()
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