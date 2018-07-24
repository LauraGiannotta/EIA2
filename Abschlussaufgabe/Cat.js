var L12_Canvas;
(function (L12_Canvas) {
    class Katze extends L12_Canvas.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.mixerWidth = 300;
            this.mixerHight = 280;
            this.x = _x;
            this.y = _y;
            this.dx = _x;
            this.move();
        }
        move() {
            const speed = 10 * (600 / 800);
            let movement = 0;
            if (this.x > this.dx && this.x - this.dx > speed)
                movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed)
                movement = speed;
            this.x += movement;
            this.draw();
        }
        move_Katze(targetX) {
            this.dx = targetX;
        }
        stop_Katze() {
            this.dx = this.x;
        }
        //Voegel fangen
        eatenBird(_x, _y) {
            if (_x > this.x && _x < (this.x + this.mixerWidth) && _y > this.y && _y < this.y + this.mixerHight) {
                return true;
            }
            return false;
        }
        draw() {
            //Kopf
            L12_Canvas.crc2.fillStyle = "#E8B936";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 165, this.y + 100, 100, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Pfoten
            L12_Canvas.crc2.fillStyle = "#E8B936";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x, this.y);
            L12_Canvas.crc2.lineTo(this.x, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 10, this.y + 330, this.x + 20, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 20, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 20, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 30, this.y + 330, this.x + 40, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 40, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 40, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 50, this.y + 330, this.x + 60, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 60, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 60, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 70, this.y + 330, this.x + 80, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 80, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 80, this.y);
            //weiterf�hrung zweite Pfote
            L12_Canvas.crc2.moveTo(this.x + 250, this.y);
            L12_Canvas.crc2.lineTo(this.x + 250, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 260, this.y + 330, this.x + 270, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 270, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 270, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 280, this.y + 330, this.x + 290, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 290, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 290, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 300, this.y + 330, this.x + 310, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 310, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 310, this.y + 300);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 320, this.y + 330, this.x + 330, this.y + 300);
            L12_Canvas.crc2.lineTo(this.x + 330, this.y + 270);
            L12_Canvas.crc2.lineTo(this.x + 330, this.y);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Unterseite Pfote1
            L12_Canvas.crc2.fillStyle = "#ED92A6";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 40, this.y + 240, 20, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.fillStyle = "#ED92A6";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 40, this.y + 225, 25, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            //Unterseite Pfote2
            L12_Canvas.crc2.fillStyle = "#ED92A6";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 290, this.y + 240, 20, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.fillStyle = "#ED92A6";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 290, this.y + 225, 25, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            //Nase
            L12_Canvas.crc2.fillStyle = "#ED92A6";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.arc(this.x + 165, this.y + 195, 7, 0, 2 * Math.PI);
            L12_Canvas.crc2.fill();
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Schnurrhaare
            L12_Canvas.crc2.fillStyle = "black";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 195);
            L12_Canvas.crc2.lineTo(this.x + 100, this.y + 210);
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 195);
            L12_Canvas.crc2.lineTo(this.x + 100, this.y + 195);
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 195);
            L12_Canvas.crc2.lineTo(this.x + 100, this.y + 180);
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            L12_Canvas.crc2.fillStyle = "black";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 195);
            L12_Canvas.crc2.lineTo(this.x + 230, this.y + 210);
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 195);
            L12_Canvas.crc2.lineTo(this.x + 230, this.y + 195);
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 195);
            L12_Canvas.crc2.lineTo(this.x + 230, this.y + 180);
            L12_Canvas.crc2.closePath();
            L12_Canvas.crc2.stroke();
            //Mund
            L12_Canvas.crc2.fillStyle = "black";
            L12_Canvas.crc2.beginPath();
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 170);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 175, this.y + 180, this.x + 185, this.y + 170);
            L12_Canvas.crc2.moveTo(this.x + 165, this.y + 170);
            L12_Canvas.crc2.quadraticCurveTo(this.x + 155, this.y + 180, this.x + 145, this.y + 170);
            L12_Canvas.crc2.stroke();
        }
    }
    L12_Canvas.Katze = Katze;
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=Cat.js.map