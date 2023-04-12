export default class Player{

    constructor(){
        this.name = "";
        this.symbol = "";
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setSymbol(symbol){
        this.symbol = symbol;
    }

    getSymbol(){
        return this.symbol;
    }
}