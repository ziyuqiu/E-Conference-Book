
function FireflyNet(x,y,r,c) {
	this.x=x; 
	this.y=y; 
	this.r=r; 
	this.c=c;
}

FireflyNet.prototype.caught = function(f){
	var d = distFromOrigin(f.x-this.x,f.y-this.y);
	return (d<(f.r+this.r));
}

function distFromOrigin(x,y) { return Math.sqrt(x*x + y*y);}

function Firefly(x,y,r,c,vx,vy){
	this.x=x;
	this.y=y;
	this.r=r;
	this.c=c;
	this.vx=vx;
	this.vy=vy;
	this.alive=true;
}

Firefly.prototype.update = function(dt){
	if(this.y + this.r >= 100|| this.y-this.r<=0) this.vy*=-1;
	if(this.x + this.r >= 100|| this.x-this.r<=0) this.vx*=-1;
	this.x += this.vx*dt;
	this.y += this.vy*dt;

}

function FireflyModel(){
	this.w=100;
	this.h=100;
	this.net = new FireflyNet(10,10,10,"green");
	this.fireflyList = [];
	this.bgcolor = "#eee";
}

FireflyModel.prototype.addFirefly= function(f){
	this.fireflyList.push(f);
}


FireflyModel.prototype.update = function(dt){
	var theNet = this.net;
	_.each(this.fireflyList,
		function(f){
			f.update(dt);
			if (theNet.caught(f)){
				f.alive=false;
			}
		}
	);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

theModel = new FireflyModel();
for(var i=0;i<1000;i++){
	var myvx = Math.random()*10-5;
	var myvy = (Math.random()-0.5)*10;
	//var c = (Math.random()<0.5)?"red":"black";
	theModel.addFirefly(new Firefly(50,50,5,getRandomColor(),myvx,myvy))
}

	var counter = 0;
	var lastTime = (new Date()).getTime();

function draw(){
	var drawContext = gameboard.getContext("2d");
	
	drawContext.fillStyle="#eee";
	drawContext.fillRect(0,0,gameboard.width,gameboard.height);
	drawContext.strokeStyle="#f00";

	console.log("drawing "+JSON.stringify(theModel.fireflyList));
	_.each(theModel.fireflyList,
		function(f) {
			//console.log("drawing ff "+JSON.stringify(f));
			if (!f.alive) return;
			drawContext.strokeStyle = f.c;
			drawContext.beginPath();
			drawContext.arc(f.x*gameboard.width/100,
							f.y*gameboard.height/100,
							f.r*gameboard.width/100,
							0,2*Math.PI,true);
							//console.log(f.x*gameboard.width/100);
			drawContext.stroke();
		}
	);
	
	
	var net = theModel.net;
	drawContext.strokeStyle = net.c;
	drawContext.beginPath();
	drawContext.arc(net.x*gameboard.width/100,
					net.y*gameboard.height/100,
					net.r*gameboard.width/100,
					0,2*Math.PI,true);
	drawContext.fill();
}

function gameLoop(){
	var theTime = (new Date()).getTime();
	var dt = theTime - lastTime; // in milliseconds
	lastTime = theTime;
	var fps= 1000/(dt);
	theModel.update(dt/1000);
	draw();
	
	if (running) 
		window.requestAnimationFrame(gameLoop);
}

drawIt = draw;
var running = false;

Template.game.events({
	"click #start": function(event){
		console.log("pressed start");
		if (!running) {
			lastTime = (new Date()).getTime();
			running=true;
			gameLoop();
			$("#start").html("Stop");
		} else {
			running=false;
			$("#start").html("Start");			
		}		
	}
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
