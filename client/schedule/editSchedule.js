Template.editSchedule.events({
		"submit #createEvent": function(event){
		event.preventDefault();
		var Date = event.target.Date.value;
		var Time = event.target.Time.value;
		var Event = event.target.Event.value;
		var Speaker = event.target.Speaker.value;
		//console.log(JSON.stringify(this));
		Schedules.insert({Date:Date,Time:Time,Event:Event,Speaker:Speaker});

		Router.go('/schedule');
		
	}
})