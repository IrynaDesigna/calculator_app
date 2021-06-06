'use strict';

document.getElementById("theme-one").onclick = function() {getThemeOne()};
function getThemeOne() {
  document.getElementById('body').classList.add('theme-one');
  document.getElementById('body').classList.remove('theme-two');
  document.getElementById('body').classList.remove('theme-three');
}


document.getElementById("theme-two").onclick = function() {getThemeTwo()};
function getThemeTwo() {
  document.getElementById('body').classList.add('theme-two');
  document.getElementById('body').classList.remove('theme-one');
  document.getElementById('body').classList.remove('theme-three');
}

document.getElementById("theme-three").onclick = function() {getThemeThree()};
function getThemeThree() {
  document.getElementById('body').classList.add('theme-three');
  document.getElementById('body').classList.remove('theme-one');
  document.getElementById('body').classList.remove('theme-one');
}

let calcScreen = document.getElementById('screen'),
    numbers = document.getElementsByClassName('number'),
    shownNum = "",
    equation,
    firstNum;

//перебераеи массив из элементов с классом number
for (var index in numbers) {
  if (index <= 10) {
    numbers[index].onclick = function() {getNum(this)};
  }
}

// function blah()

//получаем первую переменную
function getNum(btn) {
  if (shownNum.match(new RegExp(/\./g)) && shownNum.length <= 16) {
    if (btn.innerText !== ".") {
      shownNum = shownNum + btn.innerText;
      calcScreen.innerHTML = shownNum;
    }
  } else if (shownNum.length <= 16) {
    shownNum = shownNum + btn.innerText;
    calcScreen.innerHTML = shownNum;
  }
}

document.getElementById('reset').onclick = function () {cleanUp()};
function cleanUp() {
  shownNum = "";
  calcScreen.innerHTML = "0";
}

document.getElementById('del').onclick = function () {delLastNum()};
function delLastNum() {
  if (calcScreen.innerText === shownNum ) {
    shownNum = shownNum.substring(0, shownNum.length - 1);
    calcScreen.innerHTML = shownNum;
  }
}

document.getElementById('plus').onclick = function () {getMath("+")};
document.getElementById('minus').onclick = function () {getMath("-")};
document.getElementById('multiply').onclick = function () {getMath("*")};
document.getElementById('divide').onclick = function () {getMath("%")};

function getMath(action) {
  if (shownNum === "" && calcScreen.innerText === "0") {
    shownNum = "0"
  }
  firstNum = shownNum;
  equation = firstNum + " " + action;
  console.log(action);
  console.log(parseFloat(firstNum));
  cleanUp();
  calcScreen.innerHTML = firstNum;
}

document.getElementById('result').onclick = function () {getResult()};
function getResult() {
  let result;
  if (equation.match(new RegExp(/\+/g)) ) {
      result = parseFloat(firstNum) + parseFloat(shownNum);
    } else if (equation.match(new RegExp(/\-/g))) {
      result = parseFloat(firstNum) - parseFloat(shownNum);
    } else if (equation.match(new RegExp(/\*/g))) {
      result = parseFloat(firstNum) * parseFloat(shownNum);
    } else if (equation.match(new RegExp(/\%/g))) {
      result = parseFloat(firstNum) / parseFloat(shownNum);
    }
  shownNum = result;
  calcScreen.innerHTML = result;
}
