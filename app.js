const result = document.querySelector("#result");
const gunUserSelected = document.querySelector('.gun-user');
const gunComputerSelected = document.querySelector('.gun-computer');
const vs = document.querySelector('.vs');
let Scissor, Rock, Paper;

Scissor = {
  name: "TIJERA",
  counter: null,
  className: "fas fa-hand-scissors",
};
Rock = {
  name: "PIEDRA",
  counter: null,
  className: "fas fa-hand-rock",
};
Paper = {
  name: "PAPEL",
  counter: null,
  className: "fas fa-hand-paper",
};

Scissor.counter = Rock;
Rock.counter = Paper;
Paper.counter = Scissor;

let guns = [Rock, Paper, Scissor];
let User = {
  request: null,
  gun: null,
  points: 0,
};

let Computer = {
  gun: null,
  points: 0,
};

const startGame = () => {
  Computer.gun = guns[parseInt(Math.random() * 3)];
  vs.style.display = 'block'
  gunUserSelected.style.display = 'block';
  gunComputerSelected.style.display = 'block';

  gunUserSelected.firstElementChild.className = User.gun.className;
  gunComputerSelected.firstElementChild.className = Computer.gun.className;


  let winner = "Ha habido un empate.";
  if (User.gun.counter.name == Computer.gun.name) {
    winner = "IA";
    Computer.points += 1;
  } else if (Computer.gun.counter.name == User.gun.name) {
    winner = "USUARIO";
    User.points += 1;
  }

  result.innerHTML =
    "<pre>USUARIO: " +
    User.gun.name +
    " \n" +
    "IA: " +
    Computer.gun.name +
    " \n" +
    "EL GANADOR ES: " +
    winner +
    "</pre>";
  result.style.display = "flex";
};

const assignGun = (element) => {
  User.request = element.id;

  guns.forEach((item) => {
    if (User.request == item.name) {
      User.gun = item;
    }
  });
  startGame();
};
