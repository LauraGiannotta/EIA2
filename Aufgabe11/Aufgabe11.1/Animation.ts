namespace Aufgabe11_1 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 30;

    //let rects: Rect[] = [];
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#cc0000");
            stars.push(star);
            let rect: Rect = new Rect("#ff9900");
            stars.push(rect);
            let triangle: Triangle = new Triangle("#7CCD7C");
            stars.push(triangle);
        }

        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
       // let star: DavidStar = new DavidStar("#ffff00");
        //stars.push(star);
        let _x: number = _event.pageX;
        let _y: number = _event.pageY;

        let zufall: number = Math.random() * 13;

        if (zufall < 4) {
            let star: DavidStar = new DavidStar("#7CCD7C");
            star.x = _x;
            star.y =_y;
            stars.push(star);
        } else if (zufall < 8) {
            let rect: Rect = new Rect("#EEE0E5");
            rect.x = _x;
            rect.y = _y;
            stars.push(rect);
        } else {
            let triangle: Triangle = new Triangle("#CDB7B5");
            triangle.x = _x;
            triangle.y = _y;
            stars.push(triangle);
        }

        
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}