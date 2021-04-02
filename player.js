"use strict";
let prompt = require("prompt-sync")();

class Player{
    constructor(name, score, choosenGest){
        this.name = name;
        this.score = score;
        this.choosenGest = choosenGest;
        this.gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        
    }
}

class AI extends Player {
    constructor(name, score, choosenGest){
        super(name, score, choosenGest);
       
    }

    randomGesture(array){
        result = array[Math.floor(Math.random()*array.length)];
        return result;
    }
}

let playerOne = new Player("Player One", 0);
let playerTwo = new Player("Player Two", 0);
let playerAi = new AI("Machine", 0);

module.exports.Player = Player;
module.exports.AI = AI;
module.exports.playerOne = playerOne;
module.exports.playerTwo = playerTwo;
module.exports.playerAi = playerAi;


