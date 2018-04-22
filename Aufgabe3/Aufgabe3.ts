namespace Memory {
    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush: string[] = [];
    var numPairsInt: number;
    var numPlayerInt: number;
   
    let openCard: number = 0;
    let open: HTMLElement[] = [];

    document.addEventListener('DOMContentLoaded', main);
 
    
        function main(): void {
        player();
        createCardList(numPairsInt);
        enterName(numPlayerInt);
        createCards(numPairsInt);
    }

    //Spieleranzahl
    function player(): number {
        var numPlayer: string = prompt("Wieviele Spieler von 1 bis 4?", "");
        numPlayerInt = parseInt(numPlayer);
            return numPlayerInt;
         }



    //Kartenpaare
    function pair(): number {
        var numPairs: string = prompt("Wieviele Kartenpaare von 1 bis 10?", "");
        numPairsInt = parseInt(numPairs);
            return numPairsInt;
    }


    let amount: number = pair();



    //Spielernamen erstellen
    function enterName(_numPlayer: number): void {
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPlayer; i++) {

            childNodeHTML = "<p class='namen'>";
            childNodeHTML += "spieler " + (i +1)
            childNodeHTML += "</p>";
            node.innerHTML += childNodeHTML;
        }
    }


    //Inhalt erstellen
    function createCardList(x: number): void {
        for (let i: number = 1; i <= x; i++) {
            var content: string = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);

            var remove = cardContent.splice(0, 1);
        }
        console.log(cardPush)
    }


    //Karten erstellen
    function createCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;

        for (let i: number = 0; i < _numPairs * 2; i++) {
            let min: number = 0;
            let max: number = (cardPush.length);

            var random: number = Math.floor(Math.random() * Math.floor(max));


            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            var remove = cardPush.splice(random, 1)

        }


        // Karte anklickbar machen
       
        var status = document.getElementsByClassName("hidden")
            for (let i: number = 0; i<status.length; i++) {
            status[i].addEventListener("click", changeStatus);
        }

        
        // Statuswechsel zu open
        function changeStatus(_event: MouseEvent): void {

            let t: HTMLElement = <HTMLElement>_event.currentTarget;

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
                            
    function compareCards () :void {
        let cardOne:HTMLDivElement=<HTMLDivElement>document.getElementsByClassName("open")[0];
        let cardTwo:HTMLDivElement=<HTMLDivElement>document.getElementsByClassName("open")[1];
       
        open.push (cardOne, cardTwo);
        
        
         if (open[0].innerHTML==open[1].innerHTML){
            
             open[0].classList.remove("open"); 
             open[0].classList.add("taken");
             
            
             open[1].classList.remove("open"); 
             open[1].classList.add("taken");    
    }
     
        else { open[0].classList.remove("open"); 
             open[0].classList.add("hidden");
             
            
             open[1].classList.remove("open"); 
             open[1].classList.add("hidden");
             
             }
        
        //zurück auf 0
        openCard=0;
        //opeList Array löschen 
        open.splice(0, 2);

        
     if (numPairs == 0) {
      alert("Sehr gut! Gewonnen!");
    }

        }

            }
        }
    }
}
