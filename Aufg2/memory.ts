namespace Memory {

   let numPlayers: number;
   let numPairs: number;
   let n: number;
   let cardContent: string [] = ["A","B","C","D","E","F", "G", "H", "I", "J",];
   let cardArray : string [];
     
    //Eingabe numPlayers und numPairs
    
      let inputPlayers : string = prompt ("Wieviele Spieler von 1-4?", "");
      let inputNumPlayer : number = parseInt (inputPlayers);
      
      let inputPairs : string = prompt ("Wieviele Kartenpaare von 5-10?", "");
      let inputNumPairs : number = parseInt (inputPairs);
       

    

    //createCard Funktion
        
        function createCrads(_numPairsFinal: number): void {
        for (let i: number = 0; i > _numPairsFinal; i++) {
            cardArray.splice(0, 0, cardContent[i]);
            cardArray.splice(1, 0, cardContent[i]);
}
}
}