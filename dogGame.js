ball.addEventListener("click",dogGetBall);
dog.addEventListener("transitionend",dogAnimationEnd);
dogRunning = false;
// dog running is set to false here so I can keep track of when he is running


// This is the function that moves the ball and makes dog go after it.
function dogGetBall() {
	ball.style.animation = "none";
	ball.innerHTML = "";
	var x = Math.floor(Math.random() * (innerWidth-100));
	var y = Math.floor(Math.random() * (innerHeight-100));
	moveThing(ball,x,y,0,0);
	dogTurn(x);
	setTimeout(function() { moveThing(dog,x,y,-60,-130);
													dogAnimationStart();
												},500);
}

function dogGo(x,y,xOffset,yOffset) {
	moveThing(dog,x,y,xOffset,yOffset);
	dogTurn(x);
	dogAnimationStart();
}
// This is the funtion that moves an element on the page.
function moveThing(thing,x,y,xOffset,yOffset) {
	thing.style.transform = "translate(" + (x+xOffset) + "px," + (y+yOffset) + "px)";
}
// This is the function that shows the dog walking images while dog
// is moving.
function dogAnimationStart() {
	if (dogRunning == false) {
		dog_head.style.display = "none";
		dog_body.style.display = "none";
		dogRun1();
		dogInterval1 = setInterval(dogRun2,175);
		dogInterval2 = setInterval(dogRun1,350);
		dogRunning = true;
	}
}

function dogAnimationEnd(e) {
	if (e.srcElement == dog) {
	dog_run1.style.display = "none";
	dog_run2.style.display = "none";
	dog_head.style.display = "unset";
  dog_body.style.display = "unset";
	clearInterval(dogInterval1);
	clearInterval(dogInterval2);
	dogRunning = false;
	}
}
// This is a function that the dogMoveAnimation function uses to rapidly
// display and hide one dog walking image.
function dogRun1() {
	dog_run1.style.display = "unset";
	dog_run2.style.display = "none";
}
// This is the same as the last function, but it rapidly displays and hides
// the second dog walking image.
function dogRun2() {
	dog_run1.style.display = "none";
	dog_run2.style.display = "unset";
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
	gameArea.style.display = "unset";
	playBall.style.display = "none";
	custardHead.style.display = "none";
	custardBody.style.display = "none";
	yellowCircle.style.display = "none";
	dogGo(getX(ball),getY(ball),-60,-130);
}
// This function hides the ball and makes dog return to the top left corner
// of the page.
function hideGame() {
	gameArea.style.display = "none";
	playBall.style.display = "unset";
	custardHead.style.display = "unset";
	custardBody.style.display = "unset";
	yellowCircle.style.display = "unset";
	dog.style.transform = "translate(0px,0px)";
}
// These are functions that gets the coordinates of a given Element.
function getX(thing) {
	return thing.getBoundingClientRect().left + window.scrollX;
}
function getY(thing) {
	return thing.getBoundingClientRect().y + window.scrollY;
}
