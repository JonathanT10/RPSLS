class Players {
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    }
}

class Human extends Players {
    constructor(name){
        super(name);
    }
}

class AI extends Players {
    constructor(name){
        super(name);
    }
}