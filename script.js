
//////////global vars//////////

var clickedAlbum;
var musicPlayer

//change album vars to strings
var afterHours = "after-hours";


//////////functions//////////

function previewMusic (album){
	clickedAlbum = document.getElementById(String(album));
	musicPlayer = document.getElementById("music-player");
	//show music player
	//change preview button from the album to close preview
	if (musicPlayer.style.display=="flex"){
			musicPlayer.style.display="none"
		}
		else{
			musicPlayer.style.display="flex"
			//rename album in music player
			var newName = document.getElementById(album+"-name").textContent
			document.getElementById("album-name").textContent = newName;
		}
		alert(album);

	// show pause button
	// hide play button
	// play song
	// get name of Song in music player
}

function closeMusic(){
	//close music player
	document.getElementById("music-player").style.display = "none";
 // stop music
}

function pauseMusic(){
 // hide pause button
 document.getElementById("pause-button").style.display = "none";
 // show play button
 document.getElementById("play-button").style.display = "block";
 // pause music
}

function playMusic(){
 // hide play button
 document.getElementById("play-button").style.display = "none";
 // show pause button
 document.getElementById("pause-button").style.display = "block";
 // resume music
}

function skipSong(){
 // next song on the album
}

function previousSong(){
 // if play count is higher than 2 seconds, set play count to 0 (restart)
 // if play count is less than 2 seconds, go to the previous song on the album
}
