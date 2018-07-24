namespace L12_Canvas {
    window.addEventListener("load", init);
    let objects: MovingObjects[] = [];
    let nBird: number = 15;
    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let kaetzchen: Katze;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        //canvas.width = canvas.clientWidth;
        //canvas.height = canvas.clientHeight;
        crc2 = canvas.getContext("2d");



        // Funktionsaufrufe
        drawAllBackgrounds();
        canvas.addEventListener("click", insertNewObject);


        // Animation 
        for (let i: number = 0; i < nBird; i++) {
            let birds: Bird = new Bird(Math.random() * crc2.canvas.width - 50, Math.random() * (1000 + 800) + 800);
            objects.push(birds);
            birds.r = 2
}



        /*for (let i: number = 0; i < nBubble; i++) {
            let mixer: Mixer = new Mixer(100, 600);
            mixer.r = 20;
            objects.push(mixer);
        }
        */

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        kaetzchen = new Katze(0, -100);
        objects.push(kaetzchen);

        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    kaetzchen.move_Katze(30 * (600 / 800));
                    break;
                //rechte Pfeiltaste
                case 39:
                    kaetzchen.move_Katze(document.querySelector('canvas').clientWidth);
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

    function insertNewObject(_event: MouseEvent): void {
        let cx: number = _event.pageX
        let cy: number = _event.pageY;
        let flake: Food = new Food(cx, cy);
        flake.r = Math.random() * 4;
        objects.push(flake);
    }


    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate(): void {
        window.setTimeout(animate, 25);

        crc2.putImageData(imageData, 0, 0);
        moveobjects();
        drawobjects();

    }
    // Fische bewegen und zeichnen
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