Session.setDefault("School","");

Template.registration.helpers({
   registrations: function(){
   		if (Session.get("School") == "") {
			return Registrations.find({});
		} else {
   			return Registrations.find({"School":Session.get("School")},{sort:{"Name":1}});
   		}
   		
   }
})


Template.registration.events({
	'click #AllSchool':function(event){
			event.preventDefault();
			Session.set("School","");
	},
	'click #Brandeis':function(event){
			event.preventDefault();
			Session.set("School","Brandeis");
	},
	'click #Harvard':function(event){
			event.preventDefault();
			Session.set("School","Harvard");
	},
	'click #MIT':function(event){
			event.preventDefault();
			Session.set("School","MIT");
	},
	'click #Tufts':function(event){
			event.preventDefault();
			Session.set("School","Tufts");
	},
	'click #BU':function(event){
			event.preventDefault();
			Session.set("School","BU");
	},
	'click #BC':function(event){
			event.preventDefault();
			Session.set("School","BC");
	},

	'click #AllCommittee':function(event){
			event.preventDefault();
			Session.set("Committee","");
	},
	'click #GA1':function(event){
			event.preventDefault();
			Session.set("Committee","GA1");
	},
	'click #GA2':function(event){
			event.preventDefault();
			Session.set("Committee","GA2");
	},
	'click #GA3':function(event){
			event.preventDefault();
			Session.set("Committee","GA3");
	},
	'click #GA4':function(event){
			event.preventDefault();
			Session.set("Committee","GA4");
	},
	'click #GA5':function(event){
			event.preventDefault();
			Session.set("Committee","GA5");
	},
	'click #GA6':function(event){
			event.preventDefault();
			Session.set("Committee","GA6");
	},
	'click #101':function(event){
			event.preventDefault();
			Session.set("Room","101");
	},
	'click #102':function(event){
			event.preventDefault();
			Session.set("Room","102");
	},
	'click #103':function(event){
			event.preventDefault();
			Session.set("Room","103");
	},
	'click #104':function(event){
			event.preventDefault();
			Session.set("Room","104");
	},
	'click #105':function(event){
			event.preventDefault();
			Session.set("Room","105");
	},
	'click #106':function(event){
			event.preventDefault();
			Session.set("Room","106");
	},
	'click #201':function(event){
			event.preventDefault();
			Session.set("Room","201");
	},
	'click #202':function(event){
			event.preventDefault();
			Session.set("Room","202");
	},
	'click #203':function(event){
			event.preventDefault();
			Session.set("Room","203");
	},
	'click #204':function(event){
			event.preventDefault();
			Session.set("Room","204");
	},
	'click #205':function(event){
			event.preventDefault();
			Session.set("Room","205");
	},
	'click #206':function(event){
			event.preventDefault();
			Session.set("Room","206");
	}
})
