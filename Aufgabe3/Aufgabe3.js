var Memory;
(function (Memory) {
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let emptyArray = [];
    //um aus string von prompt number zu machen
    let numPairs;
    let numPlayerInt;
    let openCard = 0;
    let open = [];
    document.addEventListener('DOMContentLoaded', main);
    //Wenn Dokument geladen werden Funktionen ausgef�hrt    
    function main() {
        player();
        createCardList(numPairs);
        createPlayers(numPlayerInt);
        createCards(numPairs);
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
        numPairs = parseInt(numPairsString);
        if (numPairs >= 1 && numPairs <= 4) {
            return numPairs;
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
    function createCardList(_numPairs) {
        for (let i = 1; i <= _numPairs; i++) {
            var content = cardContent[0];
            emptyArray.push(content);
            emptyArray.push(content);
            //mit Spice wird an der 0. Stelle  1e Stelle gel�scht, um das wiederholen von A zu vermeiden
            cardContent.splice(0, 1);
        }
        console.log(emptyArray);
    }
    //Karten erstellen
    function createCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        for (let i = 0; i < _numPairs * 2; i++) {
            //Zuf�llige Zahl in der L�nge des Arrays wird erzeugt, um das erzeugte Array durchzumischen
            let random = Math.floor(Math.random() * Math.floor(emptyArray.length));
            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += emptyArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            //wieder zum vermeiden von doppelten Inhalten
            emptyArray.splice(random, 1);
            // Karte anklickbar machen
            let status = document.getElementsByClassName("hidden");
            for (let i = 0; i < status.length; i++) {
                status[i].addEventListener("click", changeStatus);
            }
        }
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
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe3.js.map