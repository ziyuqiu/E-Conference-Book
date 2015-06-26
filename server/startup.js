Meteor.startup(function(){
	if (Colors.find({}).count()==0){
		// create some initial data for the collection...
		Colors.insert({theColor:"red", hex:"ff0000"});
		Colors.insert({theColor:"green", hex:"ff0000"});
		Colors.insert({theColor:"blue", hex:"ff0000"});
		Colors.insert({theColor:"aqua", hex:"ff0000"});
		Colors.insert({theColor:"yellow", hex:"ff0000"});
	}

	if(Chats.find({}).count==0){
		Chats.insert({username: "name",text: "Hi there, this is an app which allows you to chat.",createdAt: new Date()})
		Chats.insert({username: "aaa",text: "bbb",createdAt: new Date()})
		Chats.insert({username: "aaa",text: "bbb",createdAt: new Date()})
	}

	if(Schedules.find().count()==0){
		Schedules.insert({Date:"June.1", Time: "15:00" ,Event:"Opening Ceremony",Room:"Volen 106",Speaker:"Timothy Hickey"});
		Schedules.insert({Date:"June.1", Time: "17:00" ,Event:"Dinner",Room:"Usdan",Speaker:" "});
		Schedules.insert({Date:"June.2", Time: "08:30" ,Event:"Session 1",Room:"Volen 106",Speaker:"Marie Meteer"});
		Schedules.insert({Date:"June.2", Time: "10:00" ,Event:"Session 2",Room:"Volen 106",Speaker:"Marie Meteer"});
		Schedules.insert({Date:"June.2", Time: "11:20" ,Event:"Lunch",Room:"Sherman",Speaker:" "});
		Schedules.insert({Date:"June.2", Time: "14:00" ,Event:"Session 3",Room:"Volen 106",Speaker:"Timothy Hickey"});
		Schedules.insert({Date:"June.2", Time: "15:30" ,Event:"Session 4",Room:"Volen 106",Speaker:" "});
		Schedules.insert({Date:"June.2", Time: "17:00" ,Event:"Dinner",Room:"Usdan",Speaker:"Timothy Hickey"});
}

	if(Registrations.find().count()==0){
		Registrations.insert({Name:"Amy",School:"Brandeis",Committee:"GA1",Room:"101"});
		Registrations.insert({Name:"Ben",School:"Brandeis",Committee:"GA2",Room:"101"});
		Registrations.insert({Name:"Carl",School:"Brandeis",Committee:"GA3",Room:"102"});
		Registrations.insert({Name:"David",School:"Brandeis",Committee:"GA4",Room:"102"});
		Registrations.insert({Name:"Eric",School:"Harvard",Committee:"GA5",Room:"103"});
		Registrations.insert({Name:"Frank",School:"Harvard",Committee:"GA6",Room:"103"});
		Registrations.insert({Name:"Gary",School:"Harvard",Committee:"GA1",Room:"104"});
		Registrations.insert({Name:"Henry",School:"Harvard",Committee:"GA2",Room:"104"});
		Registrations.insert({Name:"Ian",School:"MIT",Committee:"GA3",Room:"105"});
		Registrations.insert({Name:"Jack",School:"MIT",Committee:"GA4",Room:"105"});
		Registrations.insert({Name:"Kate",School:"MIT",Committee:"GA5",Room:"106"});
		Registrations.insert({Name:"Luke",School:"MIT",Committee:"GA6",Room:"106"});
		Registrations.insert({Name:"Mike",School:"Tufts",Committee:"GA1",Room:"201"});
		Registrations.insert({Name:"Neo",School:"Tufts",Committee:"GA2",Room:"201"});
		Registrations.insert({Name:"Olivia",School:"Tufts",Committee:"GA3",Room:"202"});
		Registrations.insert({Name:"Penny",School:"Tufts",Committee:"GA4",Room:"202"});
		Registrations.insert({Name:"Quincy",School:"BU",Committee:"GA5",Room:"203"});
		Registrations.insert({Name:"Reese",School:"BU",Committee:"GA6",Room:"203"});
		Registrations.insert({Name:"Steven",School:"BU",Committee:"GA1",Room:"204"});
		Registrations.insert({Name:"Tim",School:"BU",Committee:"GA2",Room:"204"});
		Registrations.insert({Name:"Victoria",School:"BC",Committee:"GA3",Room:"205"});
		Registrations.insert({Name:"Wendy",School:"BC",Committee:"GA4",Room:"205"});
		Registrations.insert({Name:"Yale",School:"BC",Committee:"GA5",Room:"206"});
		Registrations.insert({Name:"Zoe",School:"BC",Committee:"GA6",Room:"206"});
	}
});

