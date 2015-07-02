Meteor.publish("theProfiles",function(){return Profiles.find();});
Meteor.publish("theColors",function(){return Colors.find();});
Meteor.publish("theChats",function(){return Chats.find();});
Meteor.publish("theSchedules",function(){return Schedules.find();});
Meteor.publish("thePlayerList",function(){return PlayerList.find();});

Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});

