import ticTacToe from "../../classes/ticTacToe.js"

function clear(column){
    if(column){
        column.addEventListener("click", () => column.value = "")
    }
}

clear(document.querySelector(".text1"));
clear(document.querySelector(".text2"));

let registerButton = document.querySelector(".register");
if(registerButton){
    registerButton.addEventListener("click", ()=>{
        let player1Name = document.querySelector(".text1").value;
        let player2Name = document.querySelector(".text2").value;
        ticTacToe.registerPlayer(player1Name);
        ticTacToe.registerPlayer(player2Name);
        window.location.href = '../playGame/ticTacToe.html';      
    })
}   