
namespace Aufg2 {

    
    let numPairs: number;
    let numPlayers: number = 1;
    let cardContent: string[] = ["Aal", "Barsch", "Clownfisch", "Delfin", "Ente", "Falterfisch", "Gelbflosse", "Haifisch"];
    let cardArray: HTMLElement[] = []; 

    //Objekt für Karte
    class Card {
        cardContent: string;
        cardStatus: string;
        card: HTMLElement;
          
        constructor (_cardContent: string) {
            this.cardContent = _cardContent;

    //Zufällige Zuweisung der Memorykarten
        let randomStatus: number = Math.random() * 101;
                
        if (randomStatus <= 55) {
            this.cardStatus = "hidden";
        } else if (randomStatus > 55 && randomStatus <= 77) {
            this.cardStatus = "taken";
        }else if (randomStatus > 77) {
            this.cardStatus = "open";
        }
    }  

    //createCard Funktion erstellen   
    createCard(): HTMLElement[] {
        this.card = document.createElement("div");
        this.card.innerText = this.cardContent;
        this.card.setAttribute("class", "card " + this.cardStatus);
        cardArray.push(this.card);
        return cardArray;
    }
}


        // Main Funktion zum Anzeigen der Spielerinfo und dem Memory
        function main(): void {

        //Popup für Kartenpaare
         numPairs = parseInt(prompt("Wieviele Kartenpaare von 5-8?"), 10);
         if (numPairs < 5 || numPairs > 8) { 
             numPairs = 8;
    }

        //Karten erzeugen
       for (let i: number = 0; i < numPairs; i++) {
          let card: Card = new Card(cardContent[i]);
          card.createCard();

        let pair: Card = new Card(cardContent[i]);
        pair.createCard();
        }



    
        //Popup für Spieleranzahl
          let eingabeSpieler: string = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");

        //Initialisierung der verschiedenen Fälle der Spieleranzahl
        switch (eingabeSpieler) {
                case "1": 
                    numPlayers += 1;
                    break; 
                        
                case "2":
                    numPlayers += 2;
                    break;
                        
                case "3":
                    numPlayers += 3;
                    break;
                        
                case "4":
                    numPlayers += 4;
                    break;
                        
                default: 
                    location.reload();
                }
                
        for ( let i: number = 1; i < numPlayers; i++) {
            spielerDiv(i);
        }     

    //Anzeigen der Spielerboxen
        function spielerDiv(_numPlayers: number): void {
                        
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("scoreboard").appendChild(playerDiv);
       
            let player: HTMLParagraphElement = document.createElement("p");
            playerDiv.appendChild(player);
            player.innerHTML = "Spieler " + _numPlayers;
                                      
            let points: HTMLParagraphElement = document.createElement("p");
            playerDiv.appendChild(points);
            points.innerHTML = "Punkte: 00";        
        } 
    }
    //Event-Listener
    document.addEventListener("DOMContentLoaded", main);
    }