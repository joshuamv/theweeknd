
// GLOBAL VARS
var btn;
var intervalIndex; // a reference to the interval

// window loaded EVENT
window.addEventListener("DOMContentLoaded", setup);

// setup your page
function setup(){
	// set the button var
	btn = document.getElementById("preview-after-hours");

	// react to click event
	btn.addEventListener('click', previewMusic()
	});
}


//////////functions//////////

function previewMusic(){
	//show music player
	// show pause button
	// hide play button
	document.getElementById("music-player").style.display = "flex";
	// play song
	// get name of Song
	// get name of album
	// set both in music player
}

function pauseMusic(){
 // hide pause button
 // show play button
 // pause music
}

function playMusic(){
 // hide play button
 // show pause button
 // resume music
}

function closeMusic(){
 // hide music player
 // stop music
}

function skipSong(){
 // next song on the album
}

function previousSong(){
 // if play count is higher than 2 seconds, set play count to 0 (restart)
 // if play count is less than 2 seconds, go to the previous song on the album
}
