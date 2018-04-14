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
    function createCrads(_numPairsFinal) {
        for (let i = 0; i > _numPairsFinal; i++) {
            cardArray.splice(0, 0, cardContent[i]);
            cardArray.splice(1, 0, cardContent[i]);
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map