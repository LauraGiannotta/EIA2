namespace Memory {

    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let emptyArray: string[] = [];
    
    //um aus string von prompt number zu machen
    let numPairs: number;
    let numPlayerInt: number;
   
    let openCard: number = 0;
    let open: HTMLElement[] = [];
   
    let takenCards : number = 0;

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
        
        if (numPlayer >= 1 && numPlayer <= 4) {
            return numPlayer;

        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            player();
        }

    //Kartenpaare
    function pair(): number {
        var numPairsString: string = prompt("Wieviele Kartenpaare von 5 bis 10?", "");
        numPairs = parseInt(numPairsString);
        
        if (numPairs >= 1 && numPairs <= 10) {
            return numPairs;

        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 10");
            pair();
}
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

            //mit Spice wird an der 0. Stelle  1e Stelle gelöscht, um das wiederholen von A zu vermeiden
            cardContent.splice(0, 1);
        }
        console.log(emptyArray);
    }


    //Karten erstellen
    function createCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPairs * 2; i++) {
            

            //Zufällige Zahl in der Länge des Arrays wird erzeugt, um das erzeugte Array durchzumischen
            let random: number = Math.floor(Math.random() * Math.floor(emptyArray.length));


            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += emptyArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            //wieder zum vermeiden von doppelten Inhalten
            emptyArray.splice(random, 1);
            
            
            // Karte anklickbar machen bzw. Listener auf div mit Klasse hidden installiert
            let status = document.getElementsByClassName("hidden");
            for (let i: number = 0; i<status.length; i++) {
            status[i].addEventListener("click", changeStatus);
        }
    }
  }      
        // Statuswechsel zu open
        function changeStatus(_event: MouseEvent): void {

            //Variable, die schuat, was als letztes ausgewählt wurde, durch current.Target
            let target: HTMLElement = <HTMLElement>_event.currentTarget;

            //Wenn eine Karte angeklickt wird, ändert sich der Status von hidden zu open
                if (target.classList.contains ("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    //ab hier wird die Anzahl an offenen Karten erhöht
                       openCard++;
                
          //Timeout installieren                                        
                    if (openCard == 2) {
                        setTimeout(compareCards, 2000);
                    }
                
                    //noch ein klick --> erneut Statuswechsel
                    if (openCard > 2) {
                        target.classList.remove("open");
                        target.classList.add("hidden");
                    }  
                  }
}
         
          //Compare Cards Funktion                  
    function compareCards () :void {
        
        //Suche nach Objekten mit Status "open"; Variablen werden deklariert
        let cardOne:HTMLDivElement=<HTMLDivElement>document.getElementsByClassName("open")[0];
        let cardTwo:HTMLDivElement=<HTMLDivElement>document.getElementsByClassName("open")[1];
       
        open.push (cardOne, cardTwo);
        
          //Vergleich von Stelle 0 mit 1 im Array
         if (open[0].innerHTML==open[1].innerHTML){
             
             //Wenn gleich, werden Karten taken
            
             open[0].classList.remove("open"); 
             open[0].classList.add("taken");
             
            
             open[1].classList.remove("open"); 
             open[1].classList.add("taken");
             
             //Wenn diese Vorraussetzung erfüllt ist wird takenCards hochgezählt
             takenCards++;
             
             if (takenCards == numPairs) {
                 alert("Super!");
                 location.reload (true);
                 }
    }
     
        else { open[0].classList.remove("open"); 
             open[0].classList.add("hidden");
             
            
             open[1].classList.remove("open"); 
             open[1].classList.add("hidden");
             
             }
        
        //Anzahl offener Karten muss jetzt zurück auf null
         openCard=0;
        
        //Array muss wieder geleert werden
        open.splice(0, 2);

        }
    
            }
        