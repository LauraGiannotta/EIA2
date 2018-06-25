var L10_Canvas;
(function (L10_Canvas) {
    class Blubbers {
        move() {
            this.y -= 2;
            if (this.y < -5) {
                this.y = 600;
            }
        }
        draw() {
            L10_Canvas.crc2.fillStyle = "#8EE5EE";
            L10_Canvas.crc2.beginPath();
            L10_Canvas.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            L10_Canvas.crc2.closePath();
            L10_Canvas.crc2.stroke();
            L10_Canvas.crc2.fill();
        }
    }
    L10_Canvas.Blubbers = Blubbers;
})(L10_Canvas || (L10_Canvas = {}));
//# sourceMappingURL=bubbelClass.js.map