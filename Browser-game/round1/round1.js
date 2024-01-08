/*переменная с номером уровня*/
var level = 1;

var currentClick = 0;
var allClicks = 0

const monsters = [
{
  name: "First",
  health: 5,
},
{
  name: "Second",
  health: 7,
}, 
{
  name: "Third",
  health: 9,
},
{
  name: "Fourth",
  health: 10,
},
{
  name: "Fifth",
  health: 15
}];

var currentMonster = {...monsters[0]};

const messageMonsterKilled = `Monster is killed!`;
const messageAllMonstersKilled = `All Monsters are killed by yours`;

const monsterImages = document.querySelectorAll('.monster');

function updateClickUI() {
  document.getElementById("clickUp").innerHTML = currentClick;
}

function updateLevelUI() {
  document.getElementById('levelUp').innerHTML = level;
}

function slowAlertMonsterKilled(callBack) { 
  setTimeout(() => {
    alert(messageMonsterKilled);
    callBack();
  }, 0);  
}

function slowAlertAllMonstersKilled(callBack) { 
    setTimeout(() => {
      alert(messageAllMonstersKilled);
      callBack();
    }, 0);
}

function resetClick() {
  currentClick = 0;
  updateClickUI();
}

function addClick() {
  currentClick++;
  updateClickUI();
}

function addLevel() {
  level++;
  updateLevelUI();
}

function changeMonster() {
  if (level > 1) {
    monsterImages[level - 2].classList.remove('effect');
  }
  monsterImages[level - 1].classList.add('effect');
};

function checkIsEndOfGame() {
  return level === monsters.length;
};

function changeLevel() {
  if (!checkIsEndOfGame()) {
    allClicks += currentClick; 
    resetClick();
    addLevel();
    currentMonster = monsters[level - 1];
    changeMonster();
  } else {
    allClicks += currentClick;
    localStorage.setItem('level', level);
    localStorage.setItem('allClicks', allClicks);
    slowAlertAllMonstersKilled(() => document.location = './../result/result.html');
  }
};

function monsterKilledHandler() {
  slowAlertMonsterKilled(changeLevel);
}

/*функция уменьшения жизни у монстра*/
function decreaseHealth() {
    currentMonster.health--;
    if (currentMonster.health === 0) {
      monsterKilledHandler();
    }
}

function comeBack() {
  document.location = './../1.html'
}


function clickFunction() {
  addClick();
  decreaseHealth();
}

updateClickUI();
updateLevelUI();
changeMonster();
