var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.y += 10;
            if (this.y > 630) {
                this.y = 630;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "rgb(80, 20, 20)";
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fooder.js.map