var L12_Canvas;
(function (L12_Canvas) {
    window.addEventListener("load", init);
    let objects = [];
    let nBird = 15;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        //canvas.width = canvas.clientWidth;
        //canvas.height = canvas.clientHeight;
        L12_Canvas.crc2 = canvas.getContext("2d");
        // Funktionsaufrufe
        L12_Canvas.drawAllBackgrounds();
        canvas.addEventListener("click", insertNewObject);
        // Animation 
        for (let i = 0; i < nBird; i++) {
            let birds = new L12_Canvas.Bird(Math.random() * L12_Canvas.crc2.canvas.width - 50, Math.random() * (1000 + 800) + 800);
            objects.push(birds);
            birds.r = 2;
        }
        /*for (let i: number = 0; i < nBubble; i++) {
            let mixer: Mixer = new Mixer(100, 600);
            mixer.r = 20;
            objects.push(mixer);
        }
        */
        L12_Canvas.imageData = L12_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        L12_Canvas.kaetzchen = new L12_Canvas.Katze(0, -100);
        objects.push(L12_Canvas.kaetzchen);
        document.querySelector("body").addEventListener("keydown", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    L12_Canvas.kaetzchen.move_Katze(30 * (600 / 800));
                    break;
                //rechte Pfeiltaste
                case 39:
                    L12_Canvas.kaetzchen.move_Katze(document.querySelector('canvas').clientWidth);
                    break;
            }
        });
        document.querySelector("body").addEventListener("keyup", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    L12_Canvas.kaetzchen.stop_Katze();
                    break;
                //rechte Pfeiltaste
                case 39:
                    L12_Canvas.kaetzchen.stop_Katze();
                    break;
            }
        });
    }
    animate();
    function insertNewObject(_event) {
        let cx = _event.pageX;
        let cy = _event.pageY;
        let flake = new L12_Canvas.Food(cx, cy);
        flake.r = Math.random() * 4;
        objects.push(flake);
    }
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L12_Canvas.crc2.putImageData(L12_Canvas.imageData, 0, 0);
        moveobjects();
        drawobjects();
    }
    // Fische bewegen und zeichnen
    function moveobjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawobjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=animation.js.map