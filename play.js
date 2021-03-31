"use strict";
let prompt = require("prompt-sync")();

class Player{
    constructor(name, score, choosenGest){
        this.name = name;
        this.score = score;
        this.choosenGest = choosenGest;
        this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
        
    }
}
let playerOne = new Player("Player One", 0);
let playerTwo = new Player("Player Two", 0);

// console.log(playerOne.score);
// console.log(playerTwo);

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


   compareGesture(oneGest, twoGest, playerO, playerT){
       if(oneGest === twoGest){
       console.log("It is a tie!")}
       else if( oneGest === "rock"){
           if(twoGest === "scissors" || "lizard"){
            console.log("Player one wins!");
            playerO.score++;
           }
        }
        else if(twoGest === "rock"){
            if(oneGest === "scissors" || "lizard"){
             console.log("Player two wins!");
             playerT.score++;
            }
         }
        else if(oneGest === "scissors"){
            if(twoGest === "paper" || "lizard"){
             console.log("Player one wins!");
             playerO.score++;
            }
         }
        else if(twoGest === "scissors"){
            if(oneGest === "paper" || "lizard"){
             console.log("Player two wins!");
             playerT.score++;
            }
         }
        else if(oneGest === "paper"){
            if(twoGest === "rock" || "spock"){
             console.log("Player one wins!");
             playerO.score++;
            }
         }
        else if(twoGest === "paper"){
            if(oneGest === "rock" || "spock"){
             console.log("Player two wins!");
             playerT.score++;
            }
         }
        else if(oneGest === "lizard"){
            if(twoGest === "spock" || "paper"){
             console.log("Player one wins!");
             playerO.score++;
            }
         }
        else if(twoGest === "lizard"){
            if(oneGest === "spock" || "paper"){
             console.log("Player two wins!");
             playerT.score++;
            }
         }
        else if(oneGest === "spock"){
            if(twoGest === "scissors" || "rock"){
             console.log("Player one wins!");
             playerO.score++;
            }
         }
        else if(twoGest === "spock"){
            if(oneGest === "scissors" || "rock"){
             console.log("Player two wins!");
             playerT.score++;
            }
         }
    }

    // bestOfThree(scoreO, scoreT, playerO, playerT, chooseGO, chooseGT){
    //     while(playerOne.score < 3 || playerTwo.score < 3){
    //         this.selectGesture(playerO);
    //         this.selectGesture(playerT);
    //         this.compareGesture(chooseGO, chooseGT, playerO, playerT);
        }

        
    }
}

let one = new Game(playerOne);
let roundOne = one.selectGesture(playerOne);
//console.log(playerOne.choosenGest);

let two = new Game(playerTwo);
let roundTwo = two.selectGesture(playerTwo);
//console.log(playerTwo.choosenGest);

one.compareGesture(playerOne.choosenGest, playerTwo.choosenGest, playerOne, playerTwo);
//one.bestOfThree(playerOne.score, playerTwo.score, playerOne, playerTwo, playerOne.choosenGest, playerTwo.choosenGest);


console.log(playerOne.score);
console.log(playerTwo.score);
//console.log(running);





