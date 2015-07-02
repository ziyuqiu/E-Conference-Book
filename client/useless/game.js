Template.leaderboard.helpers({
	'player': function(){
      var currentUserId = Meteor.userId();
      return PlayerList.find({},{sort: {same: -1, score: 1}, limit: 3});//e.g. or just with text"Some other text"
    },

    'selectedClass': function (){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
      //return this._id
    },
});


balls=50;

function FireflyNet(x,y,r,c) {
	this.x=x; this.y=y; this.r=r; this.c=c;
}

FireflyNet.prototype.caught = function(f) {
	var d = distFromOrigin(f.x-this.x,f.y-this.y);
	return (d<=(f.r+this.r));
}

function distFromOrigin(x,y) { return Math.sqrt(x*x + y*y);}

function Firefly(x,y,r,c,vx,vy){
	this.x=x;
	this.y=y;
	this.r=r;
	this.c=c;
	this.vx=vx;
	this.vy=vy;
	this.alive = true;
}


Firefly.prototype.update = function(dt){
	if ((this.y + this.r >= 100) || (this.y - this.r <= 0)) this.vy *= -1;
	if ((this.x + this.r >= 100 )|| (this.x - this.r <= 0)) this.vx *= -1;
	this.x += this.vx*dt;
	this.y += this.vy*dt;
}

//f1 = new Firefly(50,50,2,getRandomColor(),10,-5);
//f2 = new Firefly(50,50,2,getRandomColor(),45,15);

function FireflyModel(){
	this.w=100;
	this.h=100;
	this.net = new FireflyNet(10,10,5,getRandomColor());
	this.fireflyList = [];
	// this.bgcolor="#eee";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

FireflyModel.prototype.addFirefly = function(f){
	this.fireflyList.push(f);


}


n=0;
FireflyModel.prototype.update = function(dt){
	var theNet = this.net;
	_.each(this.fireflyList,
		   function(f){
			   f.update(dt);
			   if (theNet.caught(f)) {
				   f.alive = false;
			    }
		     });
	//this.fireflyList = _.filter(this.fireflyList, function(f){return f.alive})
}

theModel = new FireflyModel();  // we just create the model!
//theModel.addFirefly(f1);
//theModel.addFirefly(f2);

for(var i =0; i<50; i++){
	var myvx = Math.random()*10-5;
	var myvy = (Math.random()-0.5)*10;
	//var c = (Math.random()<0.5)?"red":"black";
	theModel.addFirefly(new Firefly(50,50,2,getRandomColor(),myvx,myvy))
}

var counter=0;
var lastTime = (new Date()).getTime();

function draw(){
	// var net=this.net;

	var drawContext = gameboard.getContext("2d");
	
	drawContext.fillStyle="white";
	//drawContext.globalAlpha = 0.05;
	drawContext.fillRect(0,0,gameboard.width,gameboard.height);
	//drawContext.strokeStyle="#red";

	//console.log("drawing "+JSON.stringify(theModel.fireflyList));
	//drawContext.globalAlpha = 1;
	num=0;
	_.each(theModel.fireflyList,
		function(f) {
			//console.log("drawing ff "+JSON.stringify(f));
			if (!f.alive){
				num++;
				// $("#caught").html("Balls caught: "+num+"/"+balls);
				$("#point").html("Score:"+ n);
				console.log(f.c+","+theModel.net.c);
				if(f.c == theModel.net.c){
					n++;
				}

				if (num==balls){
					running=false;
					$("#round").html('<button id="newgame" class="btn active">Play again</button>');
					balls = 50;
				} return;

			};
			//drawContext.beginPath();
			drawContext.strokeStyle = f.c;
			drawContext.beginPath();
			drawContext.arc(f.x*gameboard.width/100,
							f.y*gameboard.height/100,
							f.r*gameboard.width/100,
							0,2*Math.PI,true);
							//console.log(f.x*gameboard.width/100);
			drawContext.fillStyle = f.c;
			//drawContext.globalAlpha = 0.5;
			//drawContext.beginPath();
			//drawContext.arc(f.x,f.y,f.r,0,2*Math.PI,true);
			drawContext.fill();
			// drawContext.stroke();

		}
	);
	
	
	var net = theModel.net;
	drawContext.strokeStyle = net.c;
	drawContext.beginPath();
	drawContext.arc(net.x*gameboard.width/100,
					net.y*gameboard.height/100,
					net.r*gameboard.width/100,
					0,2*Math.PI,true);
	// drawContext.stroke();
	drawContext.fill();	
}

function gameLoop(){
	var theTime = (new Date()).getTime();
	var dt = theTime - lastTime; // in milliseconds
	lastTime = theTime;
	var fps = 1000/(dt);
	//console.log("fps="+fps);

	theModel.update(dt/1000.0);
	draw();
	
	if (running) 
		window.requestAnimationFrame(gameLoop);
}

drawIt = draw;
var running = false;
count = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    $("#time").html("Time: "+count);
    if(num<balls){
    	count = count + 1;
    	t = setTimeout(function(){ timedCount() }, 1000);
    }

	if(num==balls){
		alert("Mission Done!");
		PlayerList.insert({
        	score: count,
        	same:n
        	// name: Meteor.user().profile.userName
      	})
      	console.log("Score logged.");
	}

}

Template.game.events({
	"click #startgame": function(event){
		console.log("pressed start");
		if (!running) {
			running=true;
			lastTime = (new Date()).getTime();
			gameLoop();
			$("#startgame").html("Stop");
			if(!timer_is_on){
				timer_is_on = 1;
				timedCount();
			}
		} else {
			running=false;
			$("#startgame").html("Start");
			clearTimeout(t);
			timer_is_on = 0;
		}
	},
})

Template.game.rendered = function(){
document.getElementById("gameboard").addEventListener('mousemove', 
  function(e){
   if (running) {
    	theModel.net.x = 100*(e.pageX-gameboard.offsetLeft)/gameboard.width;
    	theModel.net.y = 100*(e.pageY-gameboard.offsetTop)/gameboard.height;
 	 }
  }
);
}
