
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

var afterHoursPlay = 'audio/blinding-lights.mp3';
var melancholyPlay = 'audio/blinding-lights.mp3';
var starboyPlay = 'audio/blinding-lights.mp3';

var player = new Audio();


function playAfterHours(album){
// get name of Song in music player
player.currentTime = 0
player.pause();
document.getElementById("song-name").textContent = "Blinding Lights";
previewMusic(album);
player.src = afterHoursPlay;
playMusic();
}

function playMelancholy(album){
// get name of Song in music player
player.currentTime = 0
player.pause();
document.getElementById("song-name").textContent = "Blinding Lights";
previewMusic(album);
player.src = melancholyPlay;
playMusic();
}

function playStarboy(album){
// get name of Song in music player
player.currentTime = 0
player.pause();
document.getElementById("song-name").textContent = "Blinding Lights";
previewMusic(album);
player.src = starboyPlay;
playMusic();
}
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
	player.currentTime = 0
	pauseMusic();
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
