namespace Aufgabe02 {
    

    
    var infolist: string []=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var cardArray: string[]=[];
  
    
    
   function inputPairs() : number{
       
    let pairs : string = prompt("Wie viele Kartenpaare von 5-10?","")
    let pairSum : number = parseInt(pairs)
 
    
       return pairSum;
    }
       
   let amount :number =  inputPairs();
   
        
    console.log("L�nge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    
    
    
    
    function shuffelAray(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = infolist[0];  
        cardArray.push (content);
            cardArray.push(content);
             
            var removed = infolist.splice(0, 1);
            
            
            
        }
    console.log("Content cardArray", cardArray);
   
    
    }
    
    function generateCards(y:number) : void{
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
            console.log("L�nge cardArray nach Generate, " + cardArray.length)
            var content : string = cardArray[random];  
             
            var removed = cardArray.splice(random, 1);
            console.log(cardArray);
            
            i++;
        }
    }
    
    
    // Hauptprogramm
    function main () : void {
        
         shuffelAray(amount);
        
       
        
        
        console.log("main");
        
        // Content erzeugen
         generateCards(amount);
        }
    
    
    
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}