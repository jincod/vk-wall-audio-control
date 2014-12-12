var wall_audio = document.getElementsByClassName("wall_audio")[0];

function playFirst() {
  wall_audio.getElementsByClassName('play_new')[0].click();
}

function playLast() {
  var playButtons= wall_audio.getElementsByClassName('play_new');
  playButtons[playButtons.length - 1].click();
}

function playpause() {
  var playerButton = document.getElementById("gp_play");
  if(playerButton) {
    playerButton.click();
  } else {
    playFirst();
  }
}

function next() {
  var current = document.getElementsByClassName("current");
  if(current.length) {
    var nextTrack = current[0].nextSibling;
    if(nextTrack) {
      var id = nextTrack.id.replace("audio","")
      document.getElementById("play" + id).click();
    } else {
      playFirst();
    }
  } else {
    playFirst();
  }
}

function prev() {
  var current = document.getElementsByClassName("current");
  if(current.length) {
    var prevTrack = current[0].previousSibling;
    if(prevTrack) {
      var id = prevTrack.id.replace("audio","")
      document.getElementById("play" + id).click();
    } else {
      playLast();
    }
  } else {
    playLast();
  }
}

if(typeof command !== undefined) {
  window[command]();
}
// playpause();
// prev();
// next();