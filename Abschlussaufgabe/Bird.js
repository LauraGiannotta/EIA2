var L12_Canvas;
(function (L12_Canvas) {
    class Bird extends L12_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.y -= 4;
            if (this.y < 0) {
                this.y = Math.random() * (1000 + 800) + 800;
            }
        }
        draw() {
            L12_Canvas.crc2.fillStyle = "#A17349";
            //Schw�nzchen
            L12_Canvas.crc2.fillStyle = "#A17349";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x, this.y + 10);
            L12_Canvas.crc2.lineTo(this.x + 20, this.y + 30);
            L12_Canvas.crc2.lineTo(this.x - 20, this.y + 30);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Fl�gel
            L12_Canvas.crc2.fillStyle = "#A17349";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x + 40, this.y);
            L12_Canvas.crc2.lineTo(this.x, this.y - 15);
            L12_Canvas.crc2.lineTo(this.x, this.y + 15);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x - 40, this.y);
            L12_Canvas.crc2.lineTo(this.x, this.y - 15);
            L12_Canvas.crc2.lineTo(this.x, this.y + 15);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //K�rper
            L12_Canvas.crc2.fillStyle = "#EBB668";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Schnabel
            L12_Canvas.crc2.fillStyle = "#EDD15D";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x, this.y - 50);
            L12_Canvas.crc2.lineTo(this.x - 7, this.y - 30);
            L12_Canvas.crc2.lineTo(this.x + 7, this.y - 30);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Kopf
            L12_Canvas.crc2.fillStyle = "#EBB668";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x, this.y - 29, 10, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Augen
            L12_Canvas.crc2.fillStyle = "#714B14";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x - 4, this.y - 33, 2, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 4, this.y - 33, 2, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
        }
    }
    L12_Canvas.Bird = Bird;
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Bird.js.map