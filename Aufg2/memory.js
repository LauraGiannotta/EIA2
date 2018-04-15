var Aufg2;
(function (Aufg2) {
    let numPairs;
    let numPlayers = 1;
    let cardContent = ["Aal", "Barsch", "Clownfisch", "Delfin", "Ente", "Falterfisch", "Gelbflosse", "Haifisch"];
    let cardArray = [];
    //Objekt f�r Karte
    class Card {
        constructor(_cardContent) {
            this.cardContent = _cardContent;
            //Zuf�llige Zuweisung der Memorykarten
            let randomStatus = Math.random() * 101;
            if (randomStatus <= 55) {
                this.cardStatus = "hidden";
            }
            else if (randomStatus > 55 && randomStatus <= 77) {
                this.cardStatus = "taken";
            }
            else if (randomStatus > 77) {
                this.cardStatus = "open";
            }
        }
        //createCard Funktion erstellen   
        createCard() {
            this.card = document.createElement("div");
            this.card.innerText = this.cardContent;
            this.card.setAttribute("class", "card " + this.cardStatus);
            cardArray.push(this.card);
            return cardArray;
        }
    }
    // Main Funktion zum Anzeigen der Spielerinfo und dem Memory
    function main() {
        //Popup f�r Kartenpaare
        numPairs = parseInt(prompt("Wieviele Kartenpaare von 5-8?"), 10);
        if (numPairs < 5 || numPairs > 8) {
            numPairs = 8;
        }
        //Karten erzeugen
        for (let i = 0; i < numPairs; i++) {
            let card = new Card(cardContent[i]);
            card.createCard();
            let pair = new Card(cardContent[i]);
            pair.createCard();
        }
        //Popup f�r Spieleranzahl
        let eingabeSpieler = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");
        //Initialisierung der verschiedenen F�lle der Spieleranzahl
        switch (eingabeSpieler) {
            case "1":
                numPlayers += 1;
                break;
            case "2":
                numPlayers += 2;
                break;
            case "3":
                numPlayers += 3;
                break;
            case "4":
                numPlayers += 4;
                break;
            default:
                location.reload();
        }
        for (let i = 1; i < numPlayers; i++) {
            spielerDiv(i);
        }
        //Anzeigen der Spielerboxen
        function spielerDiv(_numPlayers) {
            let playerDiv = document.createElement("div");
            document.getElementById("gameinfo").appendChild(playerDiv);
            let player = document.createElement("p");
            playerDiv.appendChild(player);
            player.innerHTML = "Spieler " + _numPlayers;
            let points = document.createElement("p");
            playerDiv.appendChild(points);
            points.innerHTML = "Punkte: 00";
        }
    }
    //Event-Listener
    document.addEventListener("DOMContentLoaded", main);
})(Aufg2 || (Aufg2 = {}));
//# sourceMappingURL=memory.js.map