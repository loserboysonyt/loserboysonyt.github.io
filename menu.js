const weekNum = document.getElementById('weekNum');
const seasonProgress = document.getElementById('seasonProgress');
const menuItems = document.querySelectorAll('.sidebar-menu li');
const mainPanel = document.getElementById('mainPanel');

let currentWeek = 1, totalWeeks = 12;

function updateProgress() {
  const pct = (currentWeek - 1) / (totalWeeks - 1) * 100;
  seasonProgress.style.width = pct + '%';
  weekNum.textContent = currentWeek;
}

function clearActive() {
  menuItems.forEach(li => li.classList.remove('active'));
}
function setContent(html) {
  mainPanel.innerHTML = html;
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    clearActive();
    item.classList.add('active');
    switch(item.id) {
      case 'menu-play':
        setContent(`<h2>Upcoming Game</h2><p>Play your next high school game!</p>`);
        break;
      case 'menu-upgrades':
        setContent(`<h2>Upgrade Stats</h2><button>+1 Speed (500 pts)</button><button>+1 Throw (500 pts)</button>`);
        break;
      case 'menu-recruit':
        setContent(`<h2>Recruiting</h2><p>3 Scouts watching.</p>`);
        break;
      case 'menu-practice':
        setContent(`<h2>Practice</h2><p>Do drills to improve skills.</p>`);
        break;
    }
  });
});

updateProgress();