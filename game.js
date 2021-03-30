const Players = require("./players")
const Human = require("./players")
const AI= require("./players")
let prompt = require("prompt-sync")();

class Game {
    constructor(){

    }

    playOption(){
        let numberPlayers = prompt("Would you like to play Single Player or Mulitplayer? \n1. Single Player \n2. Multiplayer\n");
        switch(numberPlayers){
            case "1":
                let player = prompt("Enter your Name:");
                this.singlePlayer = new AI(player);
            break;
            case "2":
                let playerO = prompt("Enter Player One Name:");
                let playerT = prompt("Enter Player Two Name:");
                this.playerOne = new Human(playerO);
                this.playerTwo = new Human(playerT);
            break;
        }return numberPlayers;
    }
 
    compareGesture(gestureOne, gestureTwo){
        if(gestureOne === gestureTwo){
            console.log("It is a draw! \n Choose again.");
        }

    }

}

//let game = new Players();
// game.playOption();
// game.selectGesture();
