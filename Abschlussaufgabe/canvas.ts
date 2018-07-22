namespace L12_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);



        drawWaterAndSand();


        for (let i: number = 0; i < 3; i++) {

            let x: number = Math.random() * crc2.canvas.width - 130;
            let y: number = Math.random() * crc2.canvas.height - 300;

            drawFish1(x, y);
            drawFish2(x + 50, y + 50);
        }

        for (let i:  number = 0; i < 15; i++) {
            
            let x: number = Math.random() * (400-300) + 300;
            let y: number = Math.random() * crc2.canvas.height - 200;
            let r: number = Math.random() * 15;
       
        
        drawBlubberBlasen(x, y, r);
     }
        
        drawPatrickStar(250, 500);
        
    }

    //Wasser als Hintergrund für das gesamte Canvas inkl. Sand
    function drawWaterAndSand(): void {
        //Wasser
        crc2.fillStyle = "#7EC0EE";
        crc2.fillRect(0, 0, 600, 800);

        //Funktionsaufruf für Gras zwischen den 2 Ebenen
        drawGras(475, 633);
        drawGras(500, 627);
        drawGras(525, 633);

        //Patrick Stars Haus
        crc2.fillStyle = "#A0522D";

        crc2.beginPath();
        crc2.moveTo(0, 650);

        crc2.quadraticCurveTo(200, 275, 400, 650);

        crc2.lineTo(0, 650);
        crc2.fill();

        //Sand
        crc2.fillStyle = "#FFE4B5";

        crc2.beginPath();
        crc2.moveTo(0, 600);

        //die 150 und 550 ist der höchste Punkt der Welle
        crc2.quadraticCurveTo(150, 550, 300, 600);
        crc2.quadraticCurveTo(450, 650, 600, 600);
        crc2.lineTo(600, 800);
        crc2.lineTo(0, 800);

        crc2.fill();

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

    function drawGras(_x: number, _y: number): void {
        crc2.fillStyle = "#556B2F";

        crc2.beginPath();
        crc2.moveTo(_x, _y);

        crc2.quadraticCurveTo(_x + 15, _y - 12, _x, _y - 37);
        crc2.quadraticCurveTo(_x - 10, _y - 52, _x + 5, _y - 77);
        crc2.quadraticCurveTo(_x, _y - 54, _x + 10, _y - 37);
        crc2.quadraticCurveTo(_x + 25, _y - 22, _x, _y);
        crc2.stroke();
        crc2.fill();
    }

    //Kies

    function drawKies(_x: number, _y: number): void {
        crc2.fillStyle = "#7A8B8B";

        crc2.beginPath();

        crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawFish1(_x: number, _y: number): void {
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

    function drawFish2(_x: number, _y: number): void {
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

    function drawBlubberBlasen(_x: number, _y: number, _r:number): void {
        crc2.fillStyle = "#8EE5EE";

        crc2.beginPath();

        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    
    function drawPatrickStar(_x: number, _y:number) : void {
        crc2.fillStyle ="#FF4040";
        
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x+25, _y+45);
        crc2.lineTo(_x-30, _y+25);
        crc2.lineTo(_x+30, _y+25);
        crc2.lineTo(_x-25, _y+45);
        crc2.closePath();
        
        crc2.fill();
        }

}