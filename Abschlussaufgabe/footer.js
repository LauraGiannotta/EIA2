var HungryCat;
(function (HungryCat) {
    class Food extends HungryCat.MovingObjects {
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
            HungryCat.crc2.beginPath();
            HungryCat.crc2.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            HungryCat.crc2.closePath();
            HungryCat.crc2.fillStyle = "rgb(80, 20, 20)";
            HungryCat.crc2.fill();
        }
    }
    HungryCat.Food = Food;
})(HungryCat || (HungryCat = {}));
//# sourceMappingURL=footer.js.map