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


class Game{
    constructor(player){
        this.player = player;
        this.playerOne = new Player("Player One", 0);
        this.playerTwo = new Player("Player Two", 0);
    }

    playOption(){
        let numberPlayers = prompt("Would you like to play Single Player or Mulitplayer? \n1. Single Player \n2. Multiplayer");
        while(numberPlayers != 1 && numberPlayers != 2){
            numberPlayers = prompt("Would you like to play Single Player or Mulitplayer? \n1. Single Player \n2. Multiplayer");
        }
         switch(numberPlayers){
            case "1":
                console.log("You selected Single Player.")
            break;
            case "2":
               console.log("You selected Multiplayer.")
            break;
        }return numberPlayers;
    }

    selectGesture(player){
        let pick = prompt("Pick your move " + player.name +": \n1. " + this.player.gesture[0] + " \n2. " + this.player.gesture[1] + " \n3. " + this.player.gesture[2] + " \n4. " + this.player.gesture[3] + " \n5. " + this.player.gesture[4]);
        while(pick != 1 && pick != 2 && pick != 3 && pick != 4 && pick != 5){
            pick = prompt("Pick your move " + player.name +": \n1. " + this.player.gesture[0] + " \n2. " + this.player.gesture[1] + " \n3. " + this.player.gesture[2] + " \n4. " + this.player.gesture[3] + " \n5. " + this.player.gesture[4]);
        }
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
       else if( oneGest === this.player.gesture[0]){
           if(twoGest === this.player.gesture[2] || this.player.gesture[3]){
            console.log(playerO.name + " wins!");
            playerO.score++;
           }
        }
        else if(twoGest === this.player.gesture[0]){
            if(oneGest === this.player.gesture[2]|| this.player.gesture[3]){
             console.log(playerT.name + " wins!");
             playerT.score++;
            }
         }
        else if(oneGest === this.player.gesture[2]){
            if(twoGest === this.player.gesture[1] || this.player.gesture[3]){
             console.log(playerO.name + " wins!");
             playerO.score++;
            }
         }
        else if(twoGest === this.player.gesture[2]){
            if(oneGest === this.player.gesture[1] || this.player.gesture[3]){
             console.log(playerT.name + " wins!");
             playerT.score++;
            }
         }
        else if(oneGest === this.player.gesture[1]){
            if(twoGest === this.player.gesture[0] || this.player.gesture[4]){
             console.log(playerO.name + " wins!");
             playerO.score++;
            }
         }
        else if(twoGest === this.player.gesture[1]){
            if(oneGest === this.player.gesture[0] || this.player.gesture[4]){
             console.log(playerT.name + " wins!");
             playerT.score++;
            }
         }
        else if(oneGest === this.player.gesture[3]){
            if(twoGest === this.player.gesture[4]|| this.player.gesture[1]){
             console.log(playerO.name + " wins!");
             playerO.score++;
            }
         }
        else if(twoGest === this.player.gesture[3]){
            if(oneGest === this.player.gesture[4] || this.player.gesture[1]){
             console.log(playerT.name + " wins!");
             playerT.score++;
            }
         }
        else if(oneGest === this.player.gesture[4]){
            if(twoGest === this.player.gesture[2] || this.player.gesture[0]){
             console.log(playerO.name + " wins!");
             playerO.score++;
            }
         }
        else if(twoGest === this.player.gesture[4]){
            if(oneGest === this.player.gesture[2] || this.player.gesture[0]){
             console.log(playerT.name + " wins!");
             playerT.score++;
            }
         }
    }

    randomGesture(array){
       let result = array[Math.floor(Math.random()*array.length)];
        return result;
    }

    runGame(){
    let one = new Game(playerOne);
    let two = new Game(playerTwo);
    let ai = new Game(playerAi);
    let numplay = one.playOption();
    let oneScore = playerOne.score;
    let twoScore = playerTwo.score;
    let aiScore = playerAi.score;
    console.log(numplay);
        if(numplay == 1){
            while(oneScore <= 3 && aiScore <= 3){
             let roundOne = one.selectGesture(playerOne);
             let roundAi = ai.randomGesture(playerAi.gesture);
             console.log(playerAi.name + " Picks: " + roundAi);
             one.compareGesture(playerOne.choosenGest, roundAi, playerOne, playerAi);
             oneScore = playerOne.score;
             aiScore = playerAi.score;
            }
                 if(playerOne.score >= playerAi.score){
                    console.log("Player One Wins!");
                }
                else(console.log("Machine Wins"));
                console.log(playerOne.name + ": " + playerOne.score);
                console.log(playerAi.name + ": " + playerAi.score);
        }
        else if(numplay == 2){
            while(oneScore <= 3 && twoScore <= 3){
                let roundOne = one.selectGesture(playerOne);
                let roundTwo = two.selectGesture(playerTwo);
                one.compareGesture(playerOne.choosenGest, playerTwo.choosenGest, playerOne, playerTwo);
                oneScore = playerOne.score;
                twoScore = playerTwo.score;
            }
                if(playerOne.score >= playerTwo.score){
                    console.log("Player One Wins!");
                }
                else(console.log("Player Two Wins!"));
                console.log(playerOne.name + ": " + playerOne.score);
                console.log(playerTwo.name + ": " + playerTwo.score);
                
        }
    }
    
}

let game = new Game 
game.runGame();







