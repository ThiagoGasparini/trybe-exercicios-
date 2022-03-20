function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

//Exercicio 1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function daysOfTheMonth() {
  let daysId = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let daysLi = document.createElement("li");

    if (day === 24 || day === 31) {
      daysLi.className = "day holiday";
      daysLi.innerHTML = day;
      daysId.appendChild(daysLi);
    } else if (day === 4 || day === 11 || day === 18) {
      daysLi.className = "day friday";
      daysLi.innerHTML = day;
      daysId.appendChild(daysLi);
    } else if (day === 25) {
      daysLi.className = "day holiday friday";
      daysLi.innerHTML = day;
      daysId.appendChild(daysLi);
    } else {
      daysLi.className = "day";
      daysLi.innerHTML = day;
      daysId.appendChild(daysLi);
    }
  }
}
daysOfTheMonth();

//Exercicio 2
function createBtn(string) {
  let divbtn = document.querySelector(".buttons-container");
  let btn = document.createElement("button");
  btn.id = "btn-holiday";
  btn.innerText = string;
  divbtn.appendChild(btn);
}
createBtn("Feriados");

//Exercicio 3
let btn2 = document.getElementById("btn-holiday");
let classHoliday = document.querySelectorAll(".holiday");

function displayHolidays() {
  for (let index = 0; index < classHoliday.length; index += 1) {
    if (classHoliday[index].style.color === "") {
      classHoliday[index].style.color = "yellow";
    } else if (classHoliday[index].style.color === "yellow") {
      classHoliday[index].style.color = "";
    }
  }
}
btn2.addEventListener("click", displayHolidays);

//Exercicio 4
function createFridayButton(name) {
  let buttonFriday = document.querySelector(".buttons-container");
  let btn3 = document.createElement("button");
  btn3.id = "btn-friday";
  btn3.innerText = name;
  buttonFriday.appendChild(btn3);
}
createFridayButton("Sexta-Feira");

//Exercicio 5
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector("#btn-friday");
  let fridays = document.getElementsByClassName("friday");
  let newFridayText = "SEXTOU o/";

  getFridayButton.addEventListener("click", function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}

let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);

//Exercicio 6
let days = document.querySelector("#days");
function dayMouseOver(event) {
  event.target.style.fontSize = "30px";
  event.target.style.fontWeight = "600";
}
days.addEventListener("mouseover", dayMouseOver);

function dayMouseOut(event) {
  event.target.style.fontSize = "20px";
  event.target.style.fontWeight = "200";
}
days.addEventListener("mouseout", dayMouseOut);

//Exercicio 7
function newTaskSpan(task) {
  let tasksContainer = document.querySelector(".my-tasks");
  let taskName = document.createElement("span");

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
}

newTaskSpan("Projeto:");

//Exercicio 8
function legendCor(cor) {
  let divTask = document.querySelector('.my-tasks');
  let creatDiv = document.createElement('div');
  creatDiv.className = 'task';
  creatDiv.style.background = cor;
  divTask.appendChild(creatDiv);
} 
legendCor('red');

//Exercicio 9
