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
let playerOne = new Player("Player One", 0);
let playerTwo = new Player("Player Two", 0);

console.log(playerOne.score);
console.log(playerTwo);

class Game{
    constructor(player){
        this.player = player;
        this.playerOne = new Player("Player One", 0);
        this.playerTwo = new Player("Player Two", 0);
    }

    selectGesture(player){
        let pick = prompt("Pick your move: \n1. " + this.player.gesture[0] + " \n2. " + this.player.gesture[1] + " \n3. " + this.player.gesture[2] + " \n4. " + this.player.gesture[3] + " \n5. " + this.player.gesture["4"]);
        switch(pick){
            case "1":
                player.choosenGest = player.gesture[0];
                console.log(this.player.gesture[0])
            break;
            case "2":
                player.choosenGest = player.gesture[1];
                console.log(this.player.gesture[1])
            break;
            case "3":
                player.choosenGest = player.gesture[2];
                console.log(this.player.gesture[2])
            break;
            case "4":
                player.choosenGest = player.gesture[3];
                console.log(this.player.gesture[3])
            break;
            case "5":
                player.choosenGest = player.gesture[4];
                console.log(this.player.gesture[4])
            break;
        }
        return pick;
    }
   
}
let one = new Game(playerOne);
let roundOne = one.selectGesture(playerOne);
console.log(playerOne.choosenGest);

let two = new Game(playerTwo);
let roundTwo = two.selectGesture(playerTwo);
console.log(playerTwo.choosenGest);

