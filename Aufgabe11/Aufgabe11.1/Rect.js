var Aufgabe11_1;
(function (Aufgabe11_1) {
    class Rect extends Aufgabe11_1.DavidStar {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11_1.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11_1.crc2.canvas.height;
        }
        draw() {
            Aufgabe11_1.crc2.fillStyle = this.color;
            Aufgabe11_1.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    Aufgabe11_1.Rect = Rect;
})(Aufgabe11_1 || (Aufgabe11_1 = {}));
//# sourceMappingURL=Rect.js.map