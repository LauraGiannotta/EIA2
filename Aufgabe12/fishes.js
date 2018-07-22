var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x -= 2;
            if (this.x < -140)
                this.x = 600;
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "#DB7093";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y - 50, this.x + 100, this.y);
            Aufgabe11.crc2.lineTo(this.x + 130, this.y + 30);
            Aufgabe11.crc2.lineTo(this.x + 130, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 100, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y + 50, this.x, this.y);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fishes.js.map