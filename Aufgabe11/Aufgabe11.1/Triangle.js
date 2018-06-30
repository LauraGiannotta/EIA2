var Aufgabe11_1;
(function (Aufgabe11_1) {
    class Triangle extends Aufgabe11_1.DavidStar {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11_1.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11_1.crc2.canvas.height;
        }
        draw() {
            Aufgabe11_1.crc2.fillStyle = this.color;
            Aufgabe11_1.crc2.beginPath();
            Aufgabe11_1.crc2.moveTo(this.x, this.y - 30);
            Aufgabe11_1.crc2.lineTo(this.x + 30, this.y + 20);
            Aufgabe11_1.crc2.lineTo(this.x - 30, this.y + 20);
            Aufgabe11_1.crc2.closePath();
            Aufgabe11_1.crc2.fill();
        }
    }
    Aufgabe11_1.Triangle = Triangle;
})(Aufgabe11_1 || (Aufgabe11_1 = {}));
//# sourceMappingURL=Triangle.js.map