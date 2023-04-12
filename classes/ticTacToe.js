import Player from "./player.js";

class TicTacToe{

    constructor(){
        this.state = {
            players: new Array(new Player(), new Player()),
            currentPlayerIndex: 0
        }
    }

    registerPlayer(name){
        this.state.players[this.state.currentPlayerIndex].setName(name);
        let playerSymbol = this.state.currentPlayerIndex == 0 ? "X": "O";
        this.state.players[this.state.currentPlayerIndex].setSymbol(playerSymbol);
        this.resetCurrentPlayerIndex();
    }

    resetCurrentPlayerIndex(){
        this.state.currentPlayerIndex++;
        if(this.state.currentPlayerIndex == this.state.players.length) this.state.currentPlayerIndex = 0;
    }

    getCurrentPlayerSymbol(){
        return this.state.players[this.state.currentPlayerIndex].getSymbol();
    }

    getCurrentPlayerName(){
        return this.state.players[this.state.currentPlayerIndex].getName();
    }

}

const ticTacToe = new TicTacToe();

export default ticTacToe;