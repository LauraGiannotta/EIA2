namespace Memory {

      // Variablen deklarieren
      let cardContent: string[] = ["Aal", "Barsch", "Clownfisch", "Delfin", "Ente", "Forelle", "Googlefisch", "Hifisch", "Igelfisch", "Jagdfisch"];
      let cardArray: HTMLElement[] = [];
      let numPairs: number;
      let numPlayers: number;
    
      let playerInfo: HTMLElement;
      let cardField: HTMLElement;
    
      function createCard(_cardContent: string, _state: string): void {
        let card: HTMLElement = document.createElement("div");
        card.innerText = _cardContent;
        card.setAttribute("class", "card " + _state);
        cardArray.push(card);
      }
    
      /******** Dieser Part wurde von Melvin Busch übernommen, da wir nicht wissen, wie es anders gelöst werden kann *********/
      class Player {
    
          score: number;
          name: string;
          player: HTMLElement;
    
          constructor(_name: string) {
              this.name = _name;
              this.score = 0;
          }
    
          scoreUp(): number {
              this.score += 10;
              return this.score;
          }
    
          show(): void {
              this.player = document.createElement("div");
              this.player.innerHTML = `
              <span class="player-name">${this.name}</span>
              <span class="player-score">Punkte: ${this.score}</span>`;
              playerInfo.appendChild(this.player);
          }
      }
      /*************** Part Ende *************/
    
      // Zufalls Kartenpaare
      function randomMix(_array: any[]): any[] {
        for (let i: number = _array.length - 1; i > 0; i--) {
          const j: number = Math.floor(Math.random() * (i + 1));
          [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
      }
    

      function randomState(): string {
        let randomState: number = Math.random();

        if (randomState <= .5) {

          return "hidden";

        } else if (randomState > .5 && randomState <= .75) {

          return "taken";
        } else if (randomState > .75) {

          return "visible";
        }
      }
    
      function main(): void {
    
        // Eingabefleder
        numPairs = parseInt(prompt("Wieviele Kartenpaare von 5 - 10?", ""), 10);
        if (numPairs < 5 || numPairs > 10) {
          numPairs = 8;
        }

        numPlayers = parseInt(prompt("Wieviele Spieler von 1-4?", ""), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;
    
        // DOM abhängige Varaiblen deklarieren
        playerInfo = document.getElementById("infofield");
        cardField = document.getElementById("card-div");
    
        // Spielkarten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
          createCard(cardContent[i], randomState());
          createCard(cardContent[i], randomState());
        }
    
        randomMix(cardArray);
    

        for (let i: number = 0; i < cardArray.length; i++) {
          cardField.appendChild(cardArray[i]);
        }
    
        // Spieler Anzeige
        for (let i: number = 0; i < numPlayers; i++) {
            let player: Player = new Player("Spieler " + (i + 1));
            player.show();
        }
    
      }
    
      document.addEventListener("DOMContentLoaded", main);
    }