var Memory;
(function (Memory) {
    //Variablen deklarieren
    let numPlayers;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let cardPush = [];
    var open = [];
    let openCard = 0;
    var numPairsInt;
    var numPlayerInt;
    document.addEventListener('DOMContentLoaded', main);
    function main() {
        player();
        createCardList(numPairsInt);
        enterName(numPlayerInt);
        createCards(numPairsInt);
    }
    //Spieleranzahl
    function player() {
        var numPlayer = prompt("Wieviele Spieler von 1 bis 4?", "");
        numPlayerInt = parseInt(numPlayer);
        return numPlayerInt;
    }
    //Kartenpaare
    function pair() {
        var numPairs = prompt("Wieviele Kartenpaare von 1 bis 10?", "");
        numPairsInt = parseInt(numPairs);
        return numPairsInt;
    }
    let amount = pair();
    //Spielernamen erstellen
    function enterName(_numPlayer) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < _numPlayer; i++) {
            childNodeHTML = "<p class='namen'>";
            childNodeHTML += "spieler " + (i + 1);
            childNodeHTML += "</p>";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt erstellen
    function createCardList(x) {
        for (let i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);
            var remove = cardContent.splice(0, 1);
        }
        console.log(cardPush);
    }
    //Karten erstellen
    function createCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < _numPairs * 2; i++) {
            let min = 0;
            let max = (cardPush.length * 2);
            //    let randomeStatusFinal : string = randomStatus()
            var random = Math.floor(Math.random() * cardPush.length);
            console.log(random);
            //   childNodeHTML = "<div  class='card" + randomeStatusFinal + "' id='Karte" + i + "'>"; 
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            cardPush.splice(random, 1);
            addEventListener("click", clickHandler);
            i++;
        }
        console.log(cardPush);
    }
    function clickHandler(_event) {
        console.log(_event.target);
        let status = _event.target;
        if (status.classList.contains("card")) {
            status.classList.add("open");
            openCard++;
            if (openCard == 2) {
                setTimeout(open, 2000);
            }
            if (openCard > 2) {
                status.classList.remove("open");
                status.classList.add("hidden");
            }
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe3.js.map