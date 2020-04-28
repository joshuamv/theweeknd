
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

//define songs by album//

let afterHoursPlay = new Array('audio/blinding-lights.mp3', 'http://demos.w3avenue.com/html5-unleashed-tips-tricks-and-techniques/demo-audio.mp3'); // Contains Audio URLs
let current_song = 0;
let player = new Audio();
player.src = afterHoursPlay[current_song];

//////////functions//////////

function previewMusic (album){
	clickedAlbum = document.getElementById(String(album));
	musicPlayer = document.getElementById("music-player");
	//show music player
	musicPlayer.style.display="flex";
	//set all preview buttons back to preview
	var previewBtn = document.getElementsByClassName("secondary-button");
	var i;
	for (i = 0; i < previewBtn.length; i++) {
		previewBtn[i].textContent = "PREVIEW";
		previewBtn[i].style.cursor = "pointer";
	}
	//set preview button to now playing
	var nowPlaying = document.getElementById(album);
	nowPlaying.textContent = "NOW PLAYING";
	nowPlaying.style.cursor = "default";
	//rename album in music player
	var newName = document.getElementById(album+"-name").textContent;
	document.getElementById("album-name").textContent = newName;
	// hide play button
  document.getElementById("play-button").style.display = "none";
  // show pause button
  document.getElementById("pause-button").style.display = "block";
	// get name of Song in music player
	document.getElementById("song-name").textContent = "Blinding Lights";
	//clear audio array

	// play song from the array belonging to the album chosen
	playMusic();
}

function closeMusic(album){
	//close music player
	document.getElementById("music-player").style.display = "none";
	//set all preview buttons back to preview
	var previewBtn = document.getElementsByClassName("secondary-button");
	var i;
	for (i = 0; i < previewBtn.length; i++) {
		previewBtn[i].textContent = "PREVIEW";
		previewBtn[i].style.cursor = "pointer";
	}
	// stop music

}

function playMusic(){
 // hide play button
 document.getElementById("play-button").style.display = "none";
 // show pause button
 document.getElementById("pause-button").style.display = "block";
 // resume music
 player.play();
}

function pauseMusic(){
 // hide pause button
 document.getElementById("pause-button").style.display = "none";
 // show play button
 document.getElementById("play-button").style.display = "block";
 // pause music
 player.pause();
}

function skipSong(){
 // next song on the album
 player.pause();
 player.src = afterHoursPlay[++current_song];
 player.onload = ()=>{
			 player.play();
 };
}

function previousSong(){
 // if play count is higher than 2 seconds, set play count to 0 (restart)
 // if play count is less than 2 seconds, go to the previous song on the album
 player.pause();
 player.src = afterHoursPlay[--current_song];
 player.onload = ()=>{
			player.play();
 };
}
