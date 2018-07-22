var HungryCat;
(function (HungryCat) {
    window.addEventListener("load", init);
    let imgData;
    let objects = [];
    let afish = 10;
    let bfish = 30;
    let n = 30;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        HungryCat.crc2 = canvas.getContext("2d");
        console.log(HungryCat.crc2);
        let width = canvas.width;
        let height = canvas.height;
        let hintergrund = new HungryCat.Background();
        hintergrund.paint();
        imgData = HungryCat.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("touchstart", insertNewObject);
        // Fische
        for (let i = 0; i < afish; i++) {
            let fish = new HungryCat.Fish(Math.random() * HungryCat.crc2.canvas.width, Math.random() * HungryCat.crc2.canvas.height, "rgb(255,106,106)");
            objects.push(fish);
        }
        // Bubble 
        for (let i = 0; i < n - 2; i++) {
            let blubb = new HungryCat.Bubble(Math.random() * (1000 - 500) + 0, Math.random() * 180, "rgba(188,210,238,10)");
            blubb.r = Math.random() * 10;
            objects.push(blubb);
        }
        animate();
    }
    //Neue Objecte alias Futter
    function insertNewObject(_event) {
        let cx = _event.pageX;
        let cy = _event.pageY;
        let foodColor = ["rgba(238,154,73)", "rgba(290,154,73)", "rgba(138,154,73)", "rgba(238,54,233)"];
        let flake = new HungryCat.Food(cx, cy, foodColor[Math.floor(Math.random() * 4)]);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }
    function animate() {
        window.setTimeout(animate, 40);
        HungryCat.crc2.putImageData(imgData, 0, 0);
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
})(HungryCat || (HungryCat = {}));
//# sourceMappingURL=animation.js.map