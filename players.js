let prompt = require("prompt-sync")();

class Player {
    constructor(name, gesture, score){
        this.score = 0;
        this.name = name;
        this.gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        //this.choosenGesture = this.selectGesture;
    }

    playOption(){
        let numberPlayers = prompt("Would you like to play Single Player or Mulitplayer? \n1. Single Player \n2. Multiplayer");
        switch(numberPlayers){
            case "1":
                console.log("You selected Single Player.")
            break;
            case "2":
               console.log("You selected Multiplayer.")
            break;
        }return numberPlayers;
    }
 
    selectGesture(){
        let pick = prompt("Pick your move: \n1. " + this.gesture[0] + " \n2. " + this.gesture[1] + " \n3. " + this.gesture[2] + " \n4. " + this.gesture[3] + " \n5. " + this.gesture["4"]);
        switch(pick){
            case "1":
                console.log(this.gesture[0])
            break;
            case "2":
                console.log(this.gesture[1])
            break;
            case "3":
                console.log(this.gesture[2])
            break;
            case "4":
                console.log(this.gesture[3])
            break;
            case "5":
                console.log(this.gesture[4])
            break;
        }
        return pick;
    }
}

class Human extends Player {
    constructor(name, gesture, score){
        super(name, gesture, score);
    }


}

class AI extends Player {
    constructor(name, gesture, score){
        super(name, gesture, score);
       
    }

    randomGesture(array){
        result = array[Math.floor(Math.random()*array.length)];
        return result;
    }
}

// let nameOne = prompt("Enter name for player one: ");
// let nameTwo = prompt("Enter name for player two: ");


// let playerOne = new Human(nameOne, Players.selectGesture());
// let playerTwo = new Human(nameTwo, selectGesture());



//let singlePlayer = new AI(onePlayer, this.randoGest);

let game = new Player();
let playStyle = game.playOption();

if(playStyle === 1){
    let choosenGest = game.selectGesture();
    let playerOne = new Human("Player One", choosenGest, 0);
    let aiOne = new AI("Macine", AI.randomGesture(gesture));
}


console.log(playerOne);
console.log(aiOne);



// module.exports.playerOne = playerOne;
// module.exports.playerTwo = playerTwo;
module.exports.Player = Player;
// module.exports.this.gesture = 
// module.exports.Player.selectGesture = this.selectGesture
// module.exports.randoGest = 
module.exports.Human = Human;
module.exports.AI = AI;
