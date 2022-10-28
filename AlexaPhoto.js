const navButtons = document.querySelector("button")

var upNum = 0;
var downNum = 0;

var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
	upNum++
    console.log(`Up: ${upNum}`);
  } else {
	downNum++
    console.log(`Down: ${downNum}`);
  }
  if((downNum >= 7) && (downNum <=13)){

}
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

