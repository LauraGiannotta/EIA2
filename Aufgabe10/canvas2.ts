namespace L10_Canvas {
    window.addEventListener("load", init);
    let fishes: Fish[] = [];
    let Blubber: Blubber[] = [];


    let imagedata: ImageData;
    export let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);



        drawWaterAndSand();
        drawPatrickStar(250, 500);

        imagedata = crc2.getImageData(0, 0, 600, 800);


        //Animation

        for (let i: number = 0; i < 3; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width - 130;
            fish.y = Math.random() * crc2.canvas.height - 300;

            fishes.push(fish);
            //drawFish2(fish.x + 50, fish.y + 50);
        }

        for (let i: number = 0; i < 15; i++) {
            let blubber: Blubber = new Blubber();
            blubber.x = Math.random() * (400 - 350) + 350;
            blubber.y = Math.random() * crc2.canvas.height - 200;
            blubber.r = Math.random() * 10;
            blubbers.push(blubber);
        }
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

    function drawPatrickStar(_x: number, _y: number): void {
        crc2.fillStyle = "#FF4040";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y + 45);
        crc2.lineTo(_x - 30, _y + 25);
        crc2.lineTo(_x + 30, _y + 25);
        crc2.lineTo(_x - 25, _y + 45);
        crc2.closePath();

        crc2.fill();
    }

    animate();

    function animate(): void {
        window.setTimeout(animate, 25);

        crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        drawFishes();
        moveBlubber();
        drawBlubber();
    }

    function moveFishes(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }

    function drawFishes(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].draw();
        }
    }

    function moveBlubber(): void {
        for (let i: number = 0; i < Blubber.length; i++) {
            Blubber[i].move();
        }
    }

    function drawBlubber(): void {
        for (let i: number = 0; i < Blubber.length; i++) {
            Blubber[i].draw();
        }
    }

}
