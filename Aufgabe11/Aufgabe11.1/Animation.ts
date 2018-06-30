namespace Aufgabe11_1 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 30;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#c00000");
            stars.push(star);
            let rect: Rect = new Rect("#fff900");
            stars.push(rect);
        }

        animate();
    }

    function insertNewObject(_event: MouseEvent): void {


        let _x: number = _event.pageX;
        let _y: number = _event.pageY;

        let zufall: number = Math.random() * 13;

        if (zufall < 4) {
            let star: DavidStar = new DavidStar("#E6E6FA");
            star.x = _x;
            star.y =_y;
            stars.push(star);
        } else if (zufall < 8) {
            let rect: Rect = new Rect("#FFF0F5");
            rect.x = _x;
            rect.y = _y;
            stars.push(rect);
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