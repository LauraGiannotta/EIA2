var Aufgabe11_1;
(function (Aufgabe11_1) {
    class DavidStar {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11_1.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11_1.crc2.canvas.height;
        }
        // declare method without keyword function
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            Aufgabe11_1.crc2.beginPath();
            Aufgabe11_1.crc2.moveTo(this.x, this.y - 20);
            Aufgabe11_1.crc2.lineTo(this.x + 20, this.y + 10);
            Aufgabe11_1.crc2.lineTo(this.x - 20, this.y + 10);
            Aufgabe11_1.crc2.closePath();
            Aufgabe11_1.crc2.moveTo(this.x, this.y + 20);
            Aufgabe11_1.crc2.lineTo(this.x + 20, this.y - 10);
            Aufgabe11_1.crc2.lineTo(this.x - 20, this.y - 10);
            Aufgabe11_1.crc2.closePath();
            Aufgabe11_1.crc2.fillStyle = this.color;
            Aufgabe11_1.crc2.stroke();
            Aufgabe11_1.crc2.fill();
        }
    }
    Aufgabe11_1.DavidStar = DavidStar;
})(Aufgabe11_1 || (Aufgabe11_1 = {}));
//# sourceMappingURL=DavidStar.js.map