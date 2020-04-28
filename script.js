
//////////global vars//////////

var clickedAlbum;
var musicPlayer;
var album;

//change album vars to strings
var afterHours = "after-hours";
var melancholy = "melancholy";
var starboy = "starboy";
var beauty = "beauty";
var kiss = "kiss";
var balloons = "balloons";
var thrusday = "thrusday";
var echoes = "echoes";

//////////functions//////////

function previewMusic (album){
	clickedAlbum = document.getElementById(String(album));
	musicPlayer = document.getElementById("music-player");
	if (musicPlayer.style.display=="flex"){
			closeMusic();
		}
		else{
			//show music player
			musicPlayer.style.display="flex";
			//change preview button from the album to close preview
			document.getElementById(album).textContent = "CLOSE PREVIEW";
			//rename album in music player
			var newName = document.getElementById(album+"-name").textContent;
			document.getElementById("album-name").textContent = newName;
			// hide play button
		  document.getElementById("play-button").style.display = "none";
		  // show pause button
		  document.getElementById("pause-button").style.display = "block";
		}

	// play song
	// get name of Song in music player
}

function closeMusic(album){
	//close music player
	document.getElementById("music-player").style.display = "none";
	//set stop preview button to preview
	document.getElementById(album).textContent = "CLOSE PREVIEW";
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
