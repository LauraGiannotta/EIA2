namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let objects: MovingObjects[] = [];
//    let afisch: number = 10;
//    let bfisch: number = 30;
//    let n: number = 30;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let width: number = canvas.width;
        let height: number = canvas.height;

        let hintergrund: Background = new Background();
        hintergrund.paint();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas als Bild gespeichert
        console.log(imgData);

        canvas.addEventListener("click", insertNewObject);

        canvas.addEventListener("touchstart", insertNewObject);

//        //Fische
//
//        for (let i: number = 0; i < afish; i++) {
//            let fish: Fish = new Fish();
//            fish.x = Math.random() * crc2.canvas.width - 130;
//            fish.y = Math.random() * crc2.canvas.height - 300;
//
//            objects.push(fish);
//
//        }
//
//        //Blubberblasen
//
//        for (let i: number = 0; i < b; i++) {
//            let blubb: Bubble = new Bubble();
//            blubb.x = Math.random() * (400 - 350) + 350;
//            blubb.y = Math.random() * crc2.canvas.height - 200;
//            blubb.r = Math.random() * 10;
//            objects.push(blubb);
//        }



        animate();
    }


    //Neue Objecte alias Futter

    function insertNewObject(_event: MouseEvent): void {
        let cx: number = _event.pageX
        let cy: number = _event.pageY;
        let foodColor: string[] = ["rgba(238,154,73)", "rgba(290,154,73)", "rgba(138,154,73)", "rgba(238,54,233)"]
        let flake: Food = new Food(cx, cy, foodColor[Math.floor(Math.random() * 4)]);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }

    function animate(): void {

        window.setTimeout(animate, 40);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();

    }


    function moveObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }

    }

    function drawObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }

}
