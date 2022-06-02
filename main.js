const canvas= document.getElementById("myCanvas");

canvas.width = 600;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*0.9)
const car = new Car(road.getLaneCenter(1),100,30,50,"KEYS",3);
const traffic = [
	new Car(road.getLaneCenter(0),-100,30,50,"DUMMY",2)
];

//car.draw(ctx);
animate();



function animate(){

	for(let i = 0;i<traffic.length;i++){
		traffic[i].update(road.borders,[]);
	}
	car.update(road.borders,traffic);
	canvas.height= window.innerHeight;

	ctx.save();
	ctx.translate(0,-car.y+canvas.height*0.5);
	road.draw(ctx);
	for(let i=0;i<traffic.length;i++){
		traffic[i].draw(ctx,"#ff6633");
	}
	car.draw(ctx,"#334084");
	//car2.draw(ctx)

	ctx.restore();
	requestAnimationFrame(animate);
}