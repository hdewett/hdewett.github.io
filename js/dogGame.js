// MAIN
ball.addEventListener("click",dogGetBall);
dog.addEventListener("transitionend",dogAnimationEnd);

// This is the function that moves the ball and makes dog go after it.
function dogGetBall() {
	ball.style.animation = "none";
	ball.innerHTML = "";
	let x = Math.floor(Math.random() * (innerWidth-120));
	let y = Math.floor(Math.random() * (innerHeight-120));
	moveThing(ball,x,y,0,0);
	setTimeout(function() {
		clearTimeout(dogTimeout);
		dogGo(x,y,-60,-130);
	},500);
}

// This is the funtion that moves an element on the page.
function moveThing(thing,x,y,xOffset,yOffset) {
	thing.style.transform = "translate(" + (x+xOffset) + "px," + (y+yOffset) + "px)";
}

function dogGo(x,y,xOffset,yOffset) {
	moveThing(dog,x,y,xOffset,yOffset);
	dogTurn(x);
	startAnimation();
}

function startAnimation(){
	hideThing(dog_head);
	hideThing(dog_body);
	dogRun1();
	dogTimeout = setTimeout(animation,200);
}

function animation(){
	dogRun2();
	dogTimeout = setTimeout(startAnimation,200);
}

// This is the function that shows the dog walking images while dog
// is moving.

function dogAnimationEnd(e) {
	if (e.srcElement == dog) {
		clearTimeout(dogTimeout);
		hideThing(dog_run1);
		hideThing(dog_run2);
		showThing(dog_head);
		showThing(dog_body);
	}
}
// This is a function that the dogMoveAnimation function uses to rapidly
// display and hide one dog walking image.
function dogRun1() {
	hideThing(dog_run2);
	showThing(dog_run1);	
}
// This is the same as the last function, but it rapidly displays and hides
// the second dog walking image.
function dogRun2() {
	hideThing(dog_run1);
	showThing(dog_run2);
}
// Makes dog turn towards the direction of the click/ball.
function dogTurn(x) {
	if (x > dog.getBoundingClientRect().x) {
		dog_run1.style.transform = "scaleX(-1)";
		dog_run1.style.margin = "100px 0px 0px -200px";
		dog_run2.style.transform = "scaleX(-1)";
		dog_run2.style.margin = "100px 0px 0px -200px";
	} else {
		dog_run1.style.transform = "scaleX(1)";
		dog_run1.style.margin = "100px 0px 0px 100px";
		dog_run2.style.transform = "scaleX(1)";
		dog_run2.style.margin = "100px 0px 0px 100px";
	}
}
// This function shows the ball and makes dog go after it.
function showGame() {
	ball.style.transform = "translate("+getX(yellowCircle)+"px,"+getY(yellowCircle)+"px)";
	ball.innerHTML = "Click Me!";
	ball.style.animation = "flash 0.7s alternate infinite ease-in-out";
	showThing(gameArea);
	hideThing(playBall);
	hideThing(custardHead);
	hideThing(custardBody);
	hideThing(yellowCircle);
	hideThing(pageTitle);
	dogGo(getX(ball),getY(ball),-60,-130);
}
// This function hides the ball and makes dog return to the top left corner
// of the page.
function hideGame() {
	hideThing(gameArea);
	showThing(playBall);
	showThing(custardHead);
	showThing(custardBody);
	showThing(pageTitle);
	dog.style.transform = "translate(0px,0px)";
	yellowCircle.style.display = "inline-block";
}

function hideThing(thing){
	thing.style.display = "none";
}
function showThing(thing){
	thing.style.display = "unset";
}
// These are functions that gets the coordinates of a given Element.
function getX(thing) {
	return thing.getBoundingClientRect().x
}
function getY(thing) {
	return thing.getBoundingClientRect().y;
}
