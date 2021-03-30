let prompt = require("prompt-sync")();

class Player {
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.choosenGesture = this.selectGesture;
    }

    selectGesture(){
        let pick = prompt("Pick your move: \n1. " + this.gesture[0] + " \n2. " + this.gesture[1] + " \n3. " + this.gesture[2] + " \n4. " + this.gesture[3] + " \n5. " + this.gesture["4"] + "\n");
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
    constructor(name, gesture){
        super(name);
        super(gesture);
        this.secondGest = this.selectGesture();
    }


}

class AI extends Player {
    constructor(name, gesture){
        super(name);
        super(gesture);
        this.randoGest = this.randomGesture(gesture);
    }

    randomGesture(array){
        result = array[Math.floor(Math.random()*array.length)];
        return result;
    }
}
let game = new Player();
game.playOption();
game.selectGesture();


module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;
