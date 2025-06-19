const startBtn = document.getElementById('startGameBtn');
const muteBtn = document.getElementById('muteBtn');
const backBtn = document.getElementById('backToMenuBtn');
const mainMenu = document.getElementById('mainMenu');
const gameWrapper = document.getElementById('gameWrapper');

let muted = false;

startBtn.addEventListener('click', () => {
  mainMenu.style.display = 'none';
  gameWrapper.style.display = 'flex';

  if (typeof RetroBowl !== 'undefined' && typeof RetroBowl.init === 'function') {
    RetroBowl.init(); // Launch your actual game engine
  } else {
    console.warn('Game engine not found or missing init function.');
  }
});

muteBtn.addEventListener('click', () => {
  muted = !muted;
  muteBtn.textContent = muted ? '🔇 Sound: Off' : '🔊 Sound: On';
  // Implement actual sound control here if your engine supports it
});

backBtn.addEventListener('click', () => {
  gameWrapper.style.display = 'none';
  mainMenu.style.display = 'block';
});