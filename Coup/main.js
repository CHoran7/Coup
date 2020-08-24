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
		for (let i = 0; i > this.cards.length(); i++){

			let rand = Math.floor(Math.random()*this.cards.length();
			let temp = this.cards[i];
			this.cards[i] = this.cards[rand];
			this.cards[rand] = temp;
		}

    }
}