var HungryCats;
(function (HungryCats) {
    class Food extends HungryCats.MovingObjects {
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
            HungryCats.crc2.beginPath();
            HungryCats.crc2.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            HungryCats.crc2.closePath();
            HungryCats.crc2.fillStyle = "rgb(80, 20, 20)";
            HungryCats.crc2.fill();
        }
    }
    HungryCats.Food = Food;
})(HungryCats || (HungryCats = {}));
//# sourceMappingURL=fooder.js.map