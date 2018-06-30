var Aufgabe11_1;
(function (Aufgabe11_1) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 30;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11_1.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11_1.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new Aufgabe11_1.DavidStar("#c00000");
            stars.push(star);
            let rect = new Aufgabe11_1.Rect("#fff900");
            stars.push(rect);
        }
        animate();
    }
    function insertNewObject(_event) {
        // let star: DavidStar = new DavidStar("#ffff00");
        //stars.push(star);
        let _x = _event.pageX;
        let _y = _event.pageY;
        let zufall = Math.random() * 13;
        if (zufall < 4) {
            let star = new Aufgabe11_1.DavidStar("#8000ff");
            star.x = _x;
            star.y = _y;
            stars.push(star);
        }
        else if (zufall < 8) {
            let rect = new Aufgabe11_1.Rect("#a65dff");
            rect.x = _x;
            rect.y = _y;
            stars.push(rect);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11_1.crc2.clearRect(0, 0, Aufgabe11_1.crc2.canvas.width, Aufgabe11_1.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Aufgabe11_1 || (Aufgabe11_1 = {}));
//# sourceMappingURL=Animation.js.map