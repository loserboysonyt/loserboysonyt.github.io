const weekNum = document.getElementById('weekNum');
const seasonProgress = document.getElementById('seasonProgress');
const menuItems = document.querySelectorAll('.sidebar-menu li');
const mainPanel = document.getElementById('mainPanel');
const gameContainer = document.getElementById('gameContainer');

let currentWeek = 1;
let totalWeeks = 12;

function updateProgress() {
  const pct = ((currentWeek - 1) / (totalWeeks - 1)) * 100;
  seasonProgress.style.width = pct + '%';
  weekNum.textContent = currentWeek;
}

function clearActive() {
  menuItems.forEach(li => li.classList.remove('active'));
}

function setContent(html) {
  mainPanel.style.display = 'block';
  gameContainer.style.display = 'none';
  mainPanel.innerHTML = html;
}

function startGame() {
  mainPanel.style.display = 'none';
  gameContainer.style.display = 'block';
  if (typeof RetroBowl !== 'undefined' && typeof RetroBowl.init === 'function') {
    RetroBowl.init();
  } else {
    console.warn("RetroBowl game engine not found or missing init() function.");
  }
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    clearActive();
    item.classList.add('active');

    switch (item.id) {
      case 'menu-play':
        startGame();
        break;
      case 'menu-upgrades':
        setContent(`<h2>Upgrade Stats</h2><button>+1 Speed (500 pts)</button><button>+1 Throw (500 pts)</button>`);
        break;
      case 'menu-recruit':
        setContent(`<h2>Recruiting</h2><p>Scouts are evaluating your talent. Keep playing strong!</p>`);
        break;
      case 'menu-practice':
        setContent(`<h2>Practice</h2><p>Boost your stats with weekly drills and game simulations.</p>`);
        break;
    }
  });
});

updateProgress();