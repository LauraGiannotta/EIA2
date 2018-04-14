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
        
   function generateCards( y:number) : void {
        var node : any= document.getElementById("gamefield");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (cardArray.length);
            // min = Math.ceil(min);
          //  max = Math.floor(max);
            var random:number=Math.floor(Math.random() * (max - min)) + min; 
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardArray[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardArray.length)
            var content : string = cardArray[random];  
             
            var removed = cardArray.splice(random, 1);
            console.log(cardArray);
            
            i++;
        }
}
}