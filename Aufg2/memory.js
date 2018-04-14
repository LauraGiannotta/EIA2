var Memory;
(function (Memory) {
    let numPlayers;
    let numPairs;
    let n;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",];
    let cardArray;
    //Eingabe numPlayers und numPairs
    let inputPlayers = prompt("Wieviele Spieler von 1-4?", "");
    let inputNumPlayer = parseInt(inputPlayers);
    let inputPairs = prompt("Wieviele Kartenpaare von 5-10?", "");
    let inputNumPairs = parseInt(inputPairs);
    //createCard Funktion
    function generateCards(y) {
        var node = document.getElementById("gamefield");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            let min = 0;
            let max = (cardArray.length);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardArray[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("L�nge CardArray nach Generate, " + cardArray.length);
            var content = cardArray[random];
            var removed = cardArray.splice(random, 1);
            console.log(cardArray);
            i++;
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map