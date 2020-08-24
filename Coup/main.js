class Card {
    constructor(type, status) {
        this.type = type;
        this.status = status;
    }
}

class Deck {
    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {
        let types = ['duke', 'captain', 'ambassador', 'assassian', 'contessa'];
        let status = ['dead', 'alive'];

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < types.length; j++){
                this.cards.push(new Card((types[i], 'alive')));
            }
        }
    }
    shuffleDeck() {
        
    }

    
}

class ChipPile{
    constructor(){
        this.count = count;
    }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.playerChips = playerChips;
    }
}

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    //this will need to be changed for anywhere from 3-6 players
    //for loops will be written to automatically distribute cards based on the amount of players as well as remove chips based on amount of players
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck(); 
        this.players[0].playerCards = d.cards.splice(0, 2);
        this.players[1].playerCards = d.cards.splice(0, 2);
        this.cardsInMiddle = d;
        this.players[0].playerChips = 2;
        this.players[1].playerChips = 2;
    }
}