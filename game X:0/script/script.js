"use strict";
const box = document.getElementById("box");
const restart = document.getElementById("restart");
const titleCount = document.getElementById("titleCount");
const gameResult = document.getElementById("win-person");
const overlay = document.getElementById("overlay");
const winZiro = document.getElementById("win-0");
const winX = document.getElementById("win-x");
let countGame = 1;
let stepCount = Math.round(Math.random());
let wO = 1;
let wX = 1;
let num = 0;

const winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function contentLoad() {
  for (let i = 0; i < 9; i++) {
    box.append(createElem("div", "square"));
  }
}

function createElem(tag, classNode) {
  const item = document.createElement(tag);
  item.setAttribute("class", classNode);
  return item;
}
function setStyleDispley(value) {
  overlay.style.display = value;
  gameResult.style.display = value;
}

function checkWin() {
  let result = document.getElementsByClassName("square");

  for (let i = 0; i < winArray.length; i++) {
    if (
      result[winArray[i][0]].innerHTML === "x" &&
      result[winArray[i][1]].innerHTML === "x" &&
      result[winArray[i][2]].innerHTML === "x"
    ) {
      winX.innerHTML = ` ${wX}`;
      setStyleDispley("block");
      gameResult.innerHTML = `Победили крестики`;
      wX++;
      return;
    }
    if (
      result[winArray[i][0]].innerHTML === "0" &&
      result[winArray[i][1]].innerHTML === "0" &&
      result[winArray[i][2]].innerHTML === "0"
    ) {
      winZiro.innerHTML = ` ${wO}`;
      setStyleDispley("block");
      gameResult.innerHTML = `Победили нолики`;
      wO++;
      return;
    }
    if (num === 9) {
      setStyleDispley("block");
      gameResult.innerHTML = `Ничья!`;
    }
  }
}

function restartGame() {
  titleCount.innerHTML = `Раунд - ${countGame}`;
  let result = document.getElementsByClassName("square");
  for (let i = 0; i < result.length; i++) {
    result[i].innerHTML = "";
  }
  countGame++;
  num = 0;
  setStyleDispley("none");
}

const handlerStep = (event) => {
  const elem = event.target;

  if (elem.className === "square" && !elem.innerHTML) {
    stepCount % 2 === 0 ? (elem.innerHTML = "x") : (elem.innerHTML = "0");
    stepCount++;
    num++;
    checkWin();
  }
};

document.addEventListener("DOMContentLoaded", contentLoad);

box.addEventListener("click", handlerStep);

restart.addEventListener("click", restartGame);

overlay.addEventListener("click", restartGame);

gameResult.addEventListener("click", restartGame);
