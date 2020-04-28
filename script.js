
//////////global vars//////////

var clickedAlbum;
var musicPlayer;
var album;
var audio;

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
var sample = new Audio('https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3');

audio = sample;

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
	return album;
	// play song
	album
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

function pauseMusic(){
 // hide pause button
 document.getElementById("pause-button").style.display = "none";
 // show play button
 document.getElementById("play-button").style.display = "block";
 // pause music
 audio.pause()
}

function playMusic(){
 // hide play button
 document.getElementById("play-button").style.display = "none";
 // show pause button
 document.getElementById("pause-button").style.display = "block";
 // resume music
 audio.play();
}

function skipSong(){
 // next song on the album
}

function previousSong(){
 // if play count is higher than 2 seconds, set play count to 0 (restart)
 // if play count is less than 2 seconds, go to the previous song on the album
}
