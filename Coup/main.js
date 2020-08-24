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

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.playerChips = playerChips;
    }
}