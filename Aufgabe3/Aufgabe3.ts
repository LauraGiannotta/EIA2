namespace Memory {

    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let emptyArray: string[] = [];
    
    //um aus string von prompt number zu machen
    let numPairs: number;
    let numPlayerInt: number;
   
    let openCard: number = 0;
    let open: HTMLElement[] = [];

    document.addEventListener('DOMContentLoaded', main);

    //Wenn Dokument geladen werden Funktionen ausgeführt    
    
    function main(): void {
        player();
        createCardList(numPairs);
        createPlayers(numPlayerInt);
        createCards(numPairs);
    }

    
    //Spieleranzahl
    function player(): number {
        var numPlayerString: string = prompt("Wieviele Spieler von 1 bis 4?", "");
        numPlayerInt = parseInt(numPlayerString);
        
            if (numPlayerInt >= 1 && numPlayerInt <=4) {
            return numPlayerInt;
         }
            else {alert("Zahl ungültig!");}
        }

    //Kartenpaare
    function pair(): number {
        var numPairsString: string = prompt("Wieviele Kartenpaare von 5 bis 10?", "");
        numPairs = parseInt(numPairsString);
        
          if (numPairs >= 1 && numPairs <=4) {
            return numPairs;
    }
                    else {alert("Zahl ungültig!");}
        }


    let amount: number = pair();



    //Spielernamen erstellen
    function createPlayers(_numPlayerInt: number): void {
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;
        
    //Je nach Eingabe wird hier bis zu 5 mal durchgelaufen
        for (let i: number = 0; i < _numPlayerInt; i++) {

            childNodeHTML = "<div>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += "Player " + (i +1)
            childNodeHTML += "</p>";
           
            //ChildNode Inhalte werden über Node Variable ins HTML geschrieben
            node.innerHTML += childNodeHTML;
        }
    }


    //Inhalt erstellen
    function createCardList(_numPairs: number): void {
        for (let i: number = 1; i <= _numPairs; i++) {
            var content: string = cardContent[0];
            emptyArray.push(content);
            emptyArray.push(content);

            cardContent.splice(0, 1);
        }
        console.log(emptyArray)
    }


    //Karten erstellen
    function createCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;

        for (let i: number = 0; i < _numPairs * 2; i++) {
            let min: number = 0;
            let max: number = (emptyArray.length);

            var random: number = Math.floor(Math.random() * Math.floor(max));


            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += emptyArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            var remove = emptyArray.splice(random, 1)

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

        

        }

            }
        }
    }
}
