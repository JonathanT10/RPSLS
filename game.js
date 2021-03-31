"use strict";
const Player = require("./players")
const Human = require("./players")
const AI = require("./players")
let prompt = require("prompt-sync")();
const {selectGesture} = Player
const playerOne = require("./players")
console.log(playerOne);

class Game {
    constructor(){
        this.singleMove = selectGender
        this.playerObject = new AI(prompt("Enter your Name: "), singleMove)
    }

    playOption(){
        let numberPlayers = prompt("Would you like to play Single Player or Mulitplayer? \n1. Single Player \n2. Multiplayer\n");
        switch(numberPlayers){
            case "1":
                let player = prompt("Enter your Name:");
                // let singleMove = choosenGesture();
                // let playerObject = new AI(player, singleMove);
                this.playerObject;
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
        else if (gestureOne === Player.gesture[0]) {
            if (gestureTwo === Player.gesture[2]) {
                alert(Player.gesture[0] + " wins!");
            } else if (gestureTwo === Player.gesture[1]) {
                alert(Player.gesture[1] + " wins!");
            } else if (gestureTwo === Player.gesture[3]) {
                alert(Player.gesture[0] + " wins!");
            } else {
                alert(Player.gesture[5] + " wins!");
            }
        }
        
        
        else if (gestureOne === Player.gesture[1]) {
            if (gestureTwo === Player.gesture[2]) {
                alert(Player.gesture[2] + " wins!");
            } else if (gestureTwo === Player.gesture[0]) {
                alert(Player.gesture[1] + " wins!");
            } else if (gestureTwo === Player.gesture[3]) {
                alert(Player.gesture[3] + " wins!");
            } else {
                alert(Player.gesture[1] + " wins!");
            }
        }
        
        
        else if (gestureOne === Player.gesture[2]) {
            if (gestureTwo === Player.gesture[1]) {
                alert(Player.gesture[2] + " wins!");
            } else if (gestureTwo === Player.gesture[0]) {
                alert(Player.gesture[0] + " wins!");
            } else if (gestureTwo === Player.gesture[3]) {
                alert(Player.gesture[2] + " wins!");
            } else {
                alert(Player.gesture[4] + " wins!");
            }
        }
        
        
        else if (gestureOne === Player.gesture[3]) {
            if (gestureTwo === Player.gesture[2]) {
                alert(Player.gesture[2] + " wins!");
            } else if (gestureTwo === Player.gesture[0]) {
                alert(Player.gesture[0] + " wins!");
            } else if (gestureTwo === Player.gesture[1]) {
                alert(Player.gesture[3] + " wins!");
            } else {
                alert(Player.gesture[3] + " wins!");
            }
        }
        
        
        else if (gestureOne === Player.gesture[4]) {
            if (gestureTwo === Player.gesture[2]) {
                alert(Player.gesture[4] + " wins!");
            } else if (gestureTwo === Player.gesture[0]) {
                alert(Player.gesture[4] + " wins!");
            } else if (gestureTwo === Player.gesture[3]) {
                alert(Player.gesture[3] + " wins!");
            } else {
                alert(Player.gesture[1] + " wins!");
            }
        }
    }

}

let game = new Game()
game.playOption();




//let game = new Players();
// game.playOption();
// game.selectGesture();
