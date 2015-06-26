Template.draw.events({
	"click #drawIt": function(event){
		drawTriangle();
	}
})

function drawStuff(){
	var drawContext = drawSpace.getContext("2d");
	drawContext.fillStyle = "yellow";
	drawContext.fillRect(0,0,600,300);
	drawContext.fillStyle = "blue";
	drawContext.fillRect(50,50,500,200);
	drawContext.fillStyle="red";
	drawContext.fillRect(290,145,20,10);
	drawContext,fillRect(295,140,10,20);
}

Template.draw.rendered = drawStuff;

function drawTriangle(){
	var drawContext = drawSpace.getContext("2d");
	drawContext.strokeStyle="#00ff00";//or green
	drawContext.moveTo(100,100);
	drawContext.lineTo(150,100);
	drawContext.lineTo(125,150);
	drawContext.lineTo(100,100);
	drawContext.stroke();
}