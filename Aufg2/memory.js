var Memory;
(function (Memory) {
    // Variablen deklarieren
    let cardContent = ["Aal", "Barsch", "Clownfisch", "Delfin", "Haifisch", "Igelfisch", "Jagtfisch"];
    let cardArray = [];
    let numPairs;
    let numPlayers;
    let playerInfo;
    let cardField;
    function createCard(_cardContent, _state) {
        let card = document.createElement("div");
        card.innerText = _cardContent;
        card.setAttribute("class", "card " + _state);
        cardArray.push(card);
    }
    /******** Dieser Part wurde von Melvin Busch �bernommen, da wir nicht wissen, wie es anders gel�st werden kann *********/
    class Player {
        constructor(_name) {
            this.name = _name;
            this.score = 0;
        }
        scoreUp() {
            this.score += 10;
            return this.score;
        }
        show() {
            this.player = document.createElement("div");
            this.player.innerHTML = `
              <span class="player-name">${this.name}</span>
              <span class="player-score">Punkte: ${this.score}</span>`;
            playerInfo.appendChild(this.player);
        }
    }
    /*************** Part Ende *************/
    // Zufalls Kartenpaare
    function randomMix(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
    }
    function randomState() {
        let randomState = Math.random();
        if (randomState <= .5) {
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            return "taken";
        }
        else if (randomState > .75) {
            return "visible";
        }
    }
    function main() {
        // Eingabefleder
        numPairs = parseInt(prompt("Wieviele Kartenpaare von 5 - 10?", ""), 10);
        if (numPairs < 5 || numPairs > 10) {
            numPairs = 8;
        }
        numPlayers = parseInt(prompt("Wieviele Spieler von 1-4?", ""), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;
        // DOM abh�ngige Varaiblen deklarieren
        playerInfo = document.getElementById("infofield");
        cardField = document.getElementById("card-div");
        // Spielkarten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            createCard(cardContent[i], randomState());
        }
        randomMix(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        // Spieler Anzeige
        for (let i = 0; i < numPlayers; i++) {
            let player = new Player("Spieler " + (i + 1));
            player.show();
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map