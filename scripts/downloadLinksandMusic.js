
//Audio controls and change-------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById("audio-player");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const songSelect = document.getElementById("song-select");
  const currentSongDisplay = document.getElementById("song-name");

  // Enter song names here after pasting them in the music folder
  const songs = [
    "music/In This Corner of the World OST.mp3",
    "music/A silent voice OST.mp3",
    "music/Chainsaw Man OST.mp3",
    "music/Ezio s Family.mp3",
    "music/Spider Man Into the Spider Verse.mp3",
    "music/Country Roads.mp3",
    "music/A plague Tale Innocence OST.mp3"
  ];

  let currentSongIndex = 0;

  function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "Pause";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "Play";
    }
    updateCurrentSong(); // Update the displayed song name
  }


  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
    updateCurrentSong(); // Update the displayed song name
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
    updateCurrentSong(); // Update the displayed song name
  }

  function selectSong() {
    currentSongIndex = parseInt(songSelect.value);
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
    updateCurrentSong(); // Update the displayed song name
  }

  function updateCurrentSong() {
    currentSongDisplay.textContent = songs[currentSongIndex].split('/').pop(); // Get the song name from the array
  }

  // Update the displayed song name when the audio ends (for auto play)
  audioPlayer.addEventListener("ended", function () {
    nextSong();
    updateCurrentSong();
  });

  // Update the displayed song name when the user changes the song using the controls
  audioPlayer.addEventListener("play", updateCurrentSong);
  audioPlayer.addEventListener("pause", updateCurrentSong);

  playPauseBtn.addEventListener("click", playPause);
  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);
  songSelect.addEventListener("change", selectSong);

  audioPlayer.addEventListener('play', () => {
    console.log('Audio is playing...');
    playPauseBtn.textContent = "Pause";
  });

  audioPlayer.addEventListener('pause', () => {
    console.log('Audio is paused.');
    playPauseBtn.textContent = "Play";
  });
})





//Audio Bar-----------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio-player');
  const soundBarsContainer = document.getElementById('sound-bars');

  // Define an array with white and gray colors
  const colors = ['#FFFFFF', '#CCCCCC'];

  // Function to get a color alternately from the white and gray colors
  let colorIndex = 0;
  function getNextColor() {
    const color = colors[colorIndex % colors.length];
    colorIndex++;
    return color;
  }

  // Create sound bars dynamically
  function createSoundBars() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    for (let i = 0; i < bufferLength; i++) {
      const soundBar = document.createElement('div');
      soundBar.className = 'sound-bar';
      soundBar.style.backgroundColor = getNextColor(); // Set white and gray colors alternately
      soundBarsContainer.appendChild(soundBar);
    }

    function updateSoundBars() {
      analyser.getByteFrequencyData(dataArray);

      for (let i = 0; i < bufferLength; i++) {
        const soundBar = soundBarsContainer.children[i];
        const value = dataArray[i];
        const percentage = (value / 256) * 100; // Scale the value to a percentage
        soundBar.style.height = percentage + '%';
      }
      requestAnimationFrame(updateSoundBars);
    }

    audio.addEventListener('play', () => {
      audioContext.resume().then(() => {
        updateSoundBars();
      });
    });
  }

  createSoundBars();

});
