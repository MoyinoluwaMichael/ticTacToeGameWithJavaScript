import ticTacToe from "../../classes/ticTacToe.js";

let columns = [
  [
    document.querySelector(".column1"),
    document.querySelector(".column2"),
    document.querySelector(".column3"),
  ],
  [
    document.querySelector(".column4"),
    document.querySelector(".column5"),
    document.querySelector(".column6"),
  ],
  [
    document.querySelector(".column7"),
    document.querySelector(".column8"),
    document.querySelector(".column9"),
  ],
];

ticTacToe.registerPlayer("Player 1");
ticTacToe.registerPlayer("Player 2");
document.querySelector(".playerName").innerHTML =
  ticTacToe.getCurrentPlayerName();
document.querySelector(".playerName").append(", it's your turn to play.");

let setPlayerSymbol = (column) => {
  if (column) {
    column.addEventListener("click", () => {
      if (column.innerHTML == "") {
        let symbol = ticTacToe.getCurrentPlayerSymbol();
        column.style.color = symbol == "O" ? "black" : "blue";
        column.innerHTML = symbol;
        checkWinning(symbol);
        checkTie();
        ticTacToe.resetCurrentPlayerIndex();
        let playerName = ticTacToe.getCurrentPlayerName();
        document.querySelector(".playerName").innerHTML = playerName;
        document.querySelector(".playerName").append(", it's your turn to play.");
        document.querySelector(".playerName").style.marginBottom = playerName == "Player 1" ? "25%" : "10%";
      }
    });
  }
};

function checkTie(){
    let count = 0;
    for (let index = 0; index < columns.length; index++) {
        for (let index2 = 0; index2 < columns[index].length; index2++) {
            if(columns[index][index2].innerHTML != "") count++;
        }
    }
    if(count == 9){
        die();
        setTimeout(()=>{
            window.location.href = "../winning/tie.html";
        }, 3800)
    }
}

function die(){
    let time = 500;
    for (let index = 0; index < columns.length; index++) {
        for (let index2 = 0; index2 < columns[index].length; index2++) {
            setTimeout(()=>{
                columns[index][index2].style.border = "none";
                columns[index][index2].style.backgroundColor = "black";
                columns[index][index2].style.color = "white";
                document.querySelector(".board").style.border = "none";
            }, time)
            time += 300;
        }
    }
    setTimeout(()=> {
        document.querySelector(".mainContainer").remove();
    }, 3500)
}

for (let index = 0; index < columns.length; index++) {
    setPlayerSymbol(columns[0][index])
    setPlayerSymbol(columns[1][index])
    setPlayerSymbol(columns[2][index])
}

function checkWinning(symbol) {
  traceRows(symbol);
  traceColumns(symbol);
  traceSlants(symbol);
}

function traceRows(symbol) {
  columns.forEach((element) => {
    validateWinningPosition(symbol, element[0], element[1], element[2]);
  });
}

function traceColumns(symbol) {
  for (let index = 0; index < columns.length; index++) {
    validateWinningPosition(
      symbol,
      columns[0][index],
      columns[1][index],
      columns[2][index]
    );
  }
}

function traceSlants(symbol) {
  validateWinningPosition(symbol, columns[0][0], columns[1][1], columns[2][2]);
  validateWinningPosition(symbol, columns[0][2], columns[1][1], columns[2][0]);
}

function validateWinningPosition(symbol, column1, column2, column3) {
  if (
    column1.innerHTML == symbol &&
    column2.innerHTML == symbol &&
    column3.innerHTML == symbol
  ) {
    paintWinningColumns(column1, column2, column3);
    setTimeout(()=>{
        window.location.href = ticTacToe.getCurrentPlayerName() == "Player 1" ? '../winning/winning.html':
        '../winning/winning2.html';
    }, 3500)
  }
}

function paintWinningColumns(column1, column2, column3) {
  setTimeout(() => {
    column1.style.backgroundColor = "green";
    column1.style.color = "white";
  }, 500);
  setTimeout(() => {
    column2.style.backgroundColor = "green";
    column2.style.color = "white";
  }, 1100);
  setTimeout(() => {
    column3.style.backgroundColor = "green";
    column3.style.color = "white";
  }, 1700);
  discardReduncdantColumns(column1, column2, column3);
}

function discardReduncdantColumns(column1, column2, column3) {
  let time = 2300;
  for (let index = 0; index < columns.length; index++) {
    for (let index2 = 0; index2 < columns[index].length; index2++) {
      let column = columns[index][index2];
      if (column != column1 && column != column2 && column != column3) {
        setTimeout(() => {
            document.querySelector(".board").style.border = "none";
            column.style.border = "none";
            column.style.backgroundColor = "black";
            column.style.color = "black";
            document.querySelector(".board").style.backgroundColor = "black";
        }, time);
        time += 100;
      }
    }
  }
}
