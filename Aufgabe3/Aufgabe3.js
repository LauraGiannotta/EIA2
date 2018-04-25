var Memory;
(function (Memory) {
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let cardPush = [];
    //um aus string von prompt number zu machen
    let numPairsInt;
    let numPlayerInt;
    let openCard = 0;
    let open = [];
    document.addEventListener('DOMContentLoaded', main);
    //Wenn Dokument geladen werden Funktionen ausgef�hrt    
    function main() {
        player();
        createCardList(numPairsInt);
        createPlayers(numPlayerInt);
        createCards(numPairsInt);
    }
    //Spieleranzahl
    function player() {
        var numPlayerString = prompt("Wieviele Spieler von 1 bis 4?", "");
        numPlayerInt = parseInt(numPlayerString);
        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Zahl ung�ltig!");
        }
    }
    //Kartenpaare
    function pair() {
        var numPairsString = prompt("Wieviele Kartenpaare von 5 bis 10?", "");
        numPairsInt = parseInt(numPairsString);
        if (numPairsInt >= 1 && numPairsInt <= 4) {
            return numPairsInt;
        }
        else {
            alert("Zahl ung�ltig!");
        }
    }
    let amount = pair();
    //Spielernamen erstellen
    function createPlayers(_numPlayerInt) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        //Je nach Eingabe wird hier bis zu 5 mal durchgelaufen
        for (let i = 0; i < _numPlayerInt; i++) {
            childNodeHTML = "<div>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += "Player " + (i + 1);
            childNodeHTML += "</p>";
            //ChildNode Inhalte werden �ber Node Variable ins HTML geschrieben
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt erstellen
    function createCardList(_numPlayerInt) {
        for (let i = 1; i <= _numPlayerInt; i++) {
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
            let max = (cardPush.length);
            var random = Math.floor(Math.random() * Math.floor(max));
            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var remove = cardPush.splice(random, 1);
        }
        // Karte anklickbar machen
        var status = document.getElementsByClassName("hidden");
        for (let i = 0; i < status.length; i++) {
            status[i].addEventListener("click", changeStatus);
        }
        // Statuswechsel zu open
        function changeStatus(_event) {
            let t = _event.currentTarget;
            if (t.className = "hidden") {
                t.classList.remove("hidden");
                t.classList.add("open");
                openCard++;
                //Timeout installieren                                        
                if (openCard == 2) {
                    setTimeout(compareCards, 2000);
                }
                if (openCard > 2) {
                    t.classList.remove("open");
                    t.classList.add("hidden");
                }
                console.log(openCard);
                //Vergleiche Inahlt
                function compareCards() {
                    let cardOne = document.getElementsByClassName("open")[0];
                    let cardTwo = document.getElementsByClassName("open")[1];
                    open.push(cardOne, cardTwo);
                    if (open[0].innerHTML == open[1].innerHTML) {
                        open[0].classList.remove("open");
                        open[0].classList.add("taken");
                        open[1].classList.remove("open");
                        open[1].classList.add("taken");
                    }
                    else {
                        open[0].classList.remove("open");
                        open[0].classList.add("hidden");
                        open[1].classList.remove("open");
                        open[1].classList.add("hidden");
                    }
                    //zur�ck auf 0
                    openCard = 0;
                    //opeList Array l�schen 
                    open.splice(0, 2);
                }
            }
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe3.js.map