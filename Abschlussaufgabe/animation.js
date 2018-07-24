var L12_Canvas;
(function (L12_Canvas) {
    window.addEventListener("load", init);
    let objects = [];
    let nBird = 15;
    let score = 0;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        //canvas.width = canvas.clientWidth;
        //canvas.height = canvas.clientHeight;
        L12_Canvas.crc2 = canvas.getContext("2d");
        // Funktionsaufrufe
        L12_Canvas.drawAllBackgrounds();
        // Animation 
        for (let i = 0; i < nBird; i++) {
            let birds = new L12_Canvas.Bird(Math.random() * (600 - 100) + 100, Math.random() * (1000 + 800) + 800);
            objects.push(birds);
        }
        L12_Canvas.imageData = L12_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        L12_Canvas.kaetzchen = new L12_Canvas.Katze(0, -100);
        objects.push(L12_Canvas.kaetzchen);
        //Computersteuerung
        document.querySelector("body").addEventListener("keydown", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    L12_Canvas.kaetzchen.move_Katze(document.querySelector('canvas').clientWidth - document.querySelector('canvas').clientWidth - 5);
                    break;
                //rechte Pfeiltaste
                case 39:
                    L12_Canvas.kaetzchen.move_Katze(document.querySelector('canvas').clientWidth - 320);
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
    // Alle 10 Millisekunden Funktion erneut aufrufen um bewegung zu erzeugen
    function animate() {
        window.setTimeout(animate, 25);
        L12_Canvas.crc2.putImageData(L12_Canvas.imageData, 0, 0);
        moveobjects();
        drawobjects();
        findKatze();
    }
    function findKatze() {
        window.setTimeout(findKatze, 10);
        for (let i = 0; i < objects.length; i++) {
            let apple = objects[i];
            let inside = L12_Canvas.kaetzchen.eatenCat(apple.x, apple.y);
            if (inside) {
                objects.splice(i, 1);
            }
        }
    }
    //Objekte bewegen und Zeichnen
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