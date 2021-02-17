const result = document.querySelector("#result");
let Scissor, Rock, Paper;
Scissor = {
  name: "TIJERA",
  counter: null,
  img: "",
};
Rock = {
  name: "PIEDRA",
  counter: null,
  img: "",
};
Paper = {
  name: "PAPEL",
  counter: null,
  img: "",
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
  console.log("Computadora:", Computer.gun);
  console.log("Usuario: ", User);
  let winner = "Nota: Ha habido un empate.";
  if (User.gun.counter.name == Computer.gun.name) {
    console.log("Computador gana");
    winner = "Computador";
    Computer.points += 1;
  } else if (Computer.gun.counter.name == User.gun.name) {
    winner = "Usuario";
    User.points += 1;
  } else {
    console.log("Empate");
  }

  result.innerHTML =
    "<pre>Computador: " +
    Computer.gun.name +
    " \n" +
    "Usuario: " +
    User.gun.name +
    " \n" +
    "El ganador es: " +
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
