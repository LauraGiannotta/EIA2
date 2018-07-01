var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let imgData;
    let objects = [];
    //    let afisch: number = 10;
    //    let bfisch: number = 30;
    //    let n: number = 30;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        let width = canvas.width;
        let height = canvas.height;
        let hintergrund = new Aufgabe11.Background();
        hintergrund.paint();
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas als Bild gespeichert
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
    function insertNewObject(_event) {
        let cx = _event.pageX;
        let cy = _event.pageY;
        let foodColor = ["rgba(238,154,73)", "rgba(290,154,73)", "rgba(138,154,73)", "rgba(238,54,233)"];
        let flake = new Aufgabe11.Food(cx, cy, foodColor[Math.floor(Math.random() * 4)]);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }
    function animate() {
        window.setTimeout(animate, 40);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map