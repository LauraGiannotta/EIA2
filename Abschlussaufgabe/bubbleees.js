var HungryCat;
(function (HungryCat) {
    class Bubble extends HungryCat.MovingObjects {
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
            HungryCat.crc2.fillStyle = "#8EE5EE";
            HungryCat.crc2.beginPath();
            HungryCat.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            HungryCat.crc2.closePath();
            HungryCat.crc2.stroke();
            HungryCat.crc2.fill();
        }
    }
    HungryCat.Bubble = Bubble;
})(HungryCat || (HungryCat = {}));
//# sourceMappingURL=bubbleees.js.map