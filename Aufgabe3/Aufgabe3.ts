namespace Memory {

    //Variablen deklarieren
    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let cardPush: string[] = [];
    
    var open:HTMLDivElement[]=[];
    let openCard: number = 0; 
    
    var numPairsInt: number;
    var numPlayerInt: number;
   

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
            let max: number = (cardPush.length * 2);
       //    let randomeStatusFinal : string = randomStatus()
          

            var random: number = Math.floor(Math.random() * cardPush.length);
            console.log(random)
         //   childNodeHTML = "<div  class='card" + randomeStatusFinal + "' id='Karte" + i + "'>"; 
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            
            cardPush.splice(random, 1)
            
            addEventListener("click", clickHandler)
            i++;
        }
        console.log(cardPush)
    }

       function clickHandler(_event: MouseEvent): void {
           console.log(_event.target);
           let status : HTMLElement = <HTMLElement>_event.target;

           if (status.classList.contains("card")) {  
               status.classList.add("open");                   
        openCard ++;                                                           
            

        if (openCard == 2) {                                                  
            setTimeout(open, 2000);                                    
        }

        if (openCard > 2) {                                                    
            status.classList.remove("open");
            status.classList.add("hidden");
        }
    }
       }

     
     
        
    
/*
    //Status der Karten
    function randomStatus(): string {
        let randomStatus: number = Math.random();
        if (randomStatus <= .5) {
            return "hidden";
        } else if (randomStatus > .5 && randomStatus <= .75) {
            return "taken";
        } else if (randomStatus > .75) {
            return "visible";
        }
    }
*/
    

}