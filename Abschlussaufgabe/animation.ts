namespace L12_Canvas {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nBird: number = 15;
   
    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let kaetzchen: Katze;   
    let score: number = 0;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        //canvas.width = canvas.clientWidth;
        //canvas.height = canvas.clientHeight;
        crc2 = canvas.getContext("2d");



        // Funktionsaufrufe
        drawAllBackgrounds();
      


        // Animation 
        for (let i: number = 0; i < nBird; i++) {
            let birds: Bird = new Bird(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
            objects.push(birds);
        }


        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        kaetzchen = new Katze(0, -100);
        objects.push(kaetzchen);

        //Computersteuerung
        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    kaetzchen.move_Katze(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth - 5);
                    break;
                //rechte Pfeiltaste
                case 39:
                    kaetzchen.move_Katze(document.querySelector('canvas').clientWidth - 320);
                    break;
            }
        });

        document.querySelector("body").addEventListener("keyup", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    kaetzchen.stop_Katze();
                    break;
                //rechte Pfeiltaste
                case 39:
                    kaetzchen.stop_Katze();
                    break;
            }
        });

    }
    animate();
    


    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate(): void {
        window.setTimeout(animate, 25);

        crc2.putImageData(imageData, 0, 0);
        moveobjects();
        drawobjects();
        findKatze();
    }

    
    function findKatze(): void {
        window.setTimeout( findKatze, 10 );
        for ( let i: number = 0; i < objects.length; i++ ) {
            let apple = objects[i];
            let inside = kaetzchen.eatenCat( apple.x, apple.y );
            
            

            if ( inside ) {
                objects.splice( i, 1 );
            }
            

        }
}
    
    
    //Objekte bewegen und Zeichnen
    function moveobjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawobjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();
    }
    
    
    
    
//    function updateHighscore(points: number): void {
//        score += points;
//        if (score >= 150) {
//            alert("Cool, du hast einen Scoore von" + points + "erreicht");
//            score = 0;
//        }
//    }

//    //Funktion die den Punktestand zeichnet
//    function showHighscore(): void {
//        crc2.font = "30px Arial";
//        crc2.fillStyle = "#000000";
//        crc2.fillText( "Punkte: " + score, 10, 50 );
//    }


}