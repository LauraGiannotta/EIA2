var Aufgabe02;
(function (Aufgabe02) {
    var infolist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var cardArray = [];
    function inputPairs() {
        let pairs = prompt("Wie viele Kartenpaare von 5-10?", "");
        let pairSum = parseInt(pairs);
        return pairSum;
    }
    let amount = inputPairs();
    console.log("L�nge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    function shuffelAray(x) {
        for (let i = 1; i <= x; i++) {
            var content = infolist[0];
            cardArray.push(content);
            cardArray.push(content);
            var removed = infolist.splice(0, 1);
        }
        console.log("Content cardArray", cardArray);
    }
    function generateCards(y) {
        var node = document.getElementById("gamefield");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            let min = 0;
            let max = (cardArray.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardArray[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("L�nge cardArray nach Generate, " + cardArray.length);
            var content = cardArray[random];
            var removed = cardArray.splice(random, 1);
            console.log(cardArray);
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelAray(amount);
        console.log("main");
        // Content erzeugen
        generateCards(amount);
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=memory.js.map