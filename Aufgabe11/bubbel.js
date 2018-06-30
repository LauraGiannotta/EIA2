var Aufgabe11;
(function (Aufgabe11) {
    class Bubble extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.y -= 2;
            if (this.y < -5) {
                this.y = 600;
            }
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "#8EE5EE";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Bubble = Bubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bubbel.js.map