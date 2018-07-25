namespace L12_Canvas {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nBird: number = 15;
    let nToxicBird: number = 3;
    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let kaetzchen: Katze;
    let catchedBirds: number = 0;





    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        alert("Hey, hilf der abbaumelnden Katze sich mit Tauben den Bauch voll zu schlagen. Aber Achtung vor den roten Augen!");


        // Funktionsaufrufe
        drawAllBackgrounds();



        // Animation gute Vögel
        for (let i: number = 0; i < nBird; i++) {
            let birds: Bird = new Bird(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
            objects.push(birds);
        }

        //Animation böse Vögel
        for (let i: number = 0; i < nToxicBird; i++) {
            let toxicBirds: ToxicBird = new ToxicBird(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
            objects.push(toxicBirds);
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


        //Anonyme Funktion für Touch auf dem Handy
        document.querySelector("body").addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            kaetzchen.move_Katze(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            kaetzchen.move_Katze(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchend", function(e: TouchEvent) {
            kaetzchen.stop_Katze();
        });


        crc2.putImageData(imageData, 0, 0);

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
        window.setTimeout(findKatze, 10);
        for (let i: number = 0; i < objects.length; i++) {
            let birdy = objects[i];
            let inside = kaetzchen.eatenBird(birdy.x, birdy.y);


            if (inside) {
                objects.splice(i, 1);
                let birds: Bird = new Bird(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
                objects.unshift(birds);
                catchedBirds++;
                if (i >= (nBird) && i <= (nBird + nToxicBird)) {
                    alert("Ohje, die war wohl giftig... du hast " + catchedBirds + " Tauben gesammelt! Willst du's nochmal veruschen?");
                    location.reload(true)
                }
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
}