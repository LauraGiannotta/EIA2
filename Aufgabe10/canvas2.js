var L10_Canvas;
(function (L10_Canvas) {
    window.addEventListener("load", init);
    let fishes = [];
    let Blubber = [];
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Canvas.crc2 = canvas.getContext("2d");
        console.log(L10_Canvas.crc2);
        drawWaterAndSand();
        drawPatrickStar(250, 500);
        imagedata = L10_Canvas.crc2.getImageData(0, 0, 600, 800);
        for (let i = 0; i < 3; i++) {
            let fish = new L10_Canvas.Fish();
            fish.x = Math.random() * L10_Canvas.crc2.canvas.width - 130;
            fish.y = Math.random() * L10_Canvas.crc2.canvas.height - 300;
            fishes.push(fish);
        }
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * (400 - 300) + 300;
            let y = Math.random() * L10_Canvas.crc2.canvas.height - 200;
            let r = Math.random() * 15;
        }
    }
    //Wasser als Hintergrund f�r das gesamte Canvas inkl. Sand
    function drawWaterAndSand() {
        //Wasser
        L10_Canvas.crc2.fillStyle = "#7EC0EE";
        L10_Canvas.crc2.fillRect(0, 0, 600, 800);
        //Funktionsaufruf f�r Gras zwischen den 2 Ebenen
        drawGras(475, 633);
        drawGras(500, 627);
        drawGras(525, 633);
        //Patrick Stars Haus
        L10_Canvas.crc2.fillStyle = "#A0522D";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(0, 650);
        L10_Canvas.crc2.quadraticCurveTo(200, 275, 400, 650);
        L10_Canvas.crc2.lineTo(0, 650);
        L10_Canvas.crc2.fill();
        //Sand
        L10_Canvas.crc2.fillStyle = "#FFE4B5";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(0, 600);
        //die 150 und 550 ist der h�chste Punkt der Welle
        L10_Canvas.crc2.quadraticCurveTo(150, 550, 300, 600);
        L10_Canvas.crc2.quadraticCurveTo(450, 650, 600, 600);
        L10_Canvas.crc2.lineTo(600, 800);
        L10_Canvas.crc2.lineTo(0, 800);
        L10_Canvas.crc2.fill();
        //Kies
        drawKies(200, 700);
        drawKies(300, 750);
        drawKies(150, 675);
        drawKies(200, 600);
        drawKies(100, 725);
        drawKies(575, 790);
        drawKies(550, 650);
        drawKies(365, 775);
        drawKies(425, 735);
        drawKies(50, 625);
        drawKies(360, 655);
    }
    function drawGras(_x, _y) {
        L10_Canvas.crc2.fillStyle = "#556B2F";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(_x, _y);
        L10_Canvas.crc2.quadraticCurveTo(_x + 15, _y - 12, _x, _y - 37);
        L10_Canvas.crc2.quadraticCurveTo(_x - 10, _y - 52, _x + 5, _y - 77);
        L10_Canvas.crc2.quadraticCurveTo(_x, _y - 54, _x + 10, _y - 37);
        L10_Canvas.crc2.quadraticCurveTo(_x + 25, _y - 22, _x, _y);
        L10_Canvas.crc2.stroke();
        L10_Canvas.crc2.fill();
    }
    //Kies
    function drawKies(_x, _y) {
        L10_Canvas.crc2.fillStyle = "#7A8B8B";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
        L10_Canvas.crc2.closePath();
        L10_Canvas.crc2.stroke();
        L10_Canvas.crc2.fill();
    }
    /* function drawFish1(_x: number, _y: number): void {
         crc2.fillStyle = "#DB7093";
 
         crc2.beginPath();
         crc2.moveTo(_x, _y);
 
         crc2.quadraticCurveTo(_x + 50, _y - 50, _x + 100, _y);
         crc2.lineTo(_x + 130, _y + 30);
         crc2.lineTo(_x + 130, _y - 25);
         crc2.lineTo(_x + 100, _y);
         crc2.quadraticCurveTo(_x + 50, _y + 50, _x, _y);
 
 
         crc2.fill();
         crc2.stroke();
     }
     */
    /*    function drawFish2(_x: number, _y: number): void {
            crc2.fillStyle = "#DDA0DD";
    
            crc2.beginPath();
            crc2.moveTo(_x, _y);
    
            crc2.quadraticCurveTo(_x + 25, _y - 25, _x + 50, _y);
            crc2.lineTo(_x + 65, _y + 15);
            crc2.lineTo(_x + 65, _y - 12);
            crc2.lineTo(_x + 50, _y);
            crc2.quadraticCurveTo(_x + 25, _y + 25, _x, _y);
    
    
            crc2.fill();
            crc2.stroke();
        }
    */
    /*   function drawBlubberBlasen(_x: number, _y: number, _r: number): void {
           crc2.fillStyle = "#8EE5EE";
   
           crc2.beginPath();
   
           crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
           crc2.closePath();
           crc2.stroke();
           crc2.fill();
       }
   
       */
    function drawPatrickStar(_x, _y) {
        L10_Canvas.crc2.fillStyle = "#FF4040";
        L10_Canvas.crc2.beginPath();
        L10_Canvas.crc2.moveTo(_x, _y);
        L10_Canvas.crc2.lineTo(_x + 25, _y + 45);
        L10_Canvas.crc2.lineTo(_x - 30, _y + 25);
        L10_Canvas.crc2.lineTo(_x + 30, _y + 25);
        L10_Canvas.crc2.lineTo(_x - 25, _y + 45);
        L10_Canvas.crc2.closePath();
        L10_Canvas.crc2.fill();
    }
    animate();
    function animate() {
        window.setTimeout(animate, 25);
        L10_Canvas.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        drawFishes();
        moveBlubber();
        drawBlubber();
    }
    function moveFishes() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].draw();
        }
    }
    function moveBlubber() {
        for (let i = 0; i < Blubber.length; i++) {
            Blubber[i].move();
        }
    }
    function drawBlubber() {
        for (let i = 0; i < Blubber.length; i++) {
            Blubber[i].draw();
        }
    }
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=canvas2.js.map