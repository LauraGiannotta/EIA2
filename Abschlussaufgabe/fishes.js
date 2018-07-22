var HungryCat;
(function (HungryCat) {
    class Fish extends HungryCat.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x -= 2;
            if (this.x < -140)
                this.x = 600;
        }
        draw() {
            HungryCat.crc2.fillStyle = "#DB7093";
            HungryCat.crc2.beginPath();
            HungryCat.crc2.moveTo(this.x, this.y);
            HungryCat.crc2.quadraticCurveTo(this.x + 50, this.y - 50, this.x + 100, this.y);
            HungryCat.crc2.lineTo(this.x + 130, this.y + 30);
            HungryCat.crc2.lineTo(this.x + 130, this.y - 25);
            HungryCat.crc2.lineTo(this.x + 100, this.y);
            HungryCat.crc2.quadraticCurveTo(this.x + 50, this.y + 50, this.x, this.y);
            HungryCat.crc2.fill();
            HungryCat.crc2.stroke();
        }
    }
    HungryCat.Fish = Fish;
})(HungryCat || (HungryCat = {}));
//# sourceMappingURL=fishes.js.map