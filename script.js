// STARTER JS SCRIPT CONTAINS
// THE BASIC AND MOST COMMONLY USED
// PATTERNS IN JS:

// + Selecting elements with Id
// + Event Listeners
// + setInterval()
// + Checking/Adding/removing classes
// + Checking size of elements
// + Manipulating CSS

// GLOBAL VARS
var btn;
var intervalIndex; // a reference to the interval

// window loaded EVENT
window.addEventListener("DOMContentLoaded", setup);

// window resize EVENT
window.addEventListener("resize", resize);

// setup your page
function setup(){
	// set the button var
	btn = document.getElementById("sayHello");

	// start calling draw function once every second
	intervalIndex = setInterval(draw, 1000);

	// react to click event
	btn.addEventListener('click',function(){
		alert("Hello!");
		// stop calling draw
		clearInterval(intervalIndex);
	});

	// intial call to resize
	resize();
}

function draw(){

	// toggle bright and dark classes
	if( btn.classList.contains("bright") ){
		btn.classList.remove("bright");
		btn.classList.add("dark");
	}else{
		btn.classList.add("bright");
		btn.classList.remove("dark");
	}
}


function clickFn(){
	alert("Hello!");
}

// react to page resize
function resize(){
	// get window width
  var wid = window.innerWidth;
  var hei = window.innerHeight;

	// calculate position
	var x = (wid/2) - (btn.offsetWidth/2);
  var y = (hei/2) - (btn.offsetHeight/2);

	// set position
  btn.style.top = y + "px";
  btn.style.left = x + "px";
}
