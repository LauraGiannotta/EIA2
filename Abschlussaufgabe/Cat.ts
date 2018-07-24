namespace L12_Canvas {

    export class Katze extends MovingObjects {

        dx: number;
        mixerWidth: number = 300;
        mixerHight: number = 280;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.dx = _x;
            this.move();
        }

        move(): void {
            const speed = 10 * (600 / 800);
            let movement = 0;

            if (this.x > this.dx && this.x - this.dx > speed) movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed) movement = speed;

            this.x += movement;

            this.draw();
        }


        public move_Katze(targetX: number): void {
            this.dx = targetX;
        }

        stop_Katze(): void {
            this.dx = this.x;
        }

        //Voegel fangen

        eatenBird(_x: number, _y: number): boolean {
            if (_x > this.x && _x < (this.x + this.mixerWidth) && _y > this.y && _y < this.y + this.mixerHight) {
                return true;

            }
            return false;
        }

        draw(): void {


            //Kopf
            crc2.fillStyle = "#E8B936";
            crc2.beginPath();
            crc2.arc(this.x + 165, this.y + 100, 100, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();


            //Pfoten
            crc2.fillStyle = "#E8B936";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 300);
            crc2.quadraticCurveTo(this.x + 10, this.y + 330, this.x + 20, this.y + 300);
            crc2.lineTo(this.x + 20, this.y + 270);
            crc2.lineTo(this.x + 20, this.y + 300);
            crc2.quadraticCurveTo(this.x + 30, this.y + 330, this.x + 40, this.y + 300);
            crc2.lineTo(this.x + 40, this.y + 270);
            crc2.lineTo(this.x + 40, this.y + 300);
            crc2.quadraticCurveTo(this.x + 50, this.y + 330, this.x + 60, this.y + 300);
            crc2.lineTo(this.x + 60, this.y + 270);
            crc2.lineTo(this.x + 60, this.y + 300);
            crc2.quadraticCurveTo(this.x + 70, this.y + 330, this.x + 80, this.y + 300);
            crc2.lineTo(this.x + 80, this.y + 270);
            crc2.lineTo(this.x + 80, this.y);


            //weiterführung zweite Pfote

            crc2.moveTo(this.x + 250, this.y);
            crc2.lineTo(this.x + 250, this.y + 300);
            crc2.quadraticCurveTo(this.x + 260, this.y + 330, this.x + 270, this.y + 300);
            crc2.lineTo(this.x + 270, this.y + 270);
            crc2.lineTo(this.x + 270, this.y + 300);
            crc2.quadraticCurveTo(this.x + 280, this.y + 330, this.x + 290, this.y + 300);
            crc2.lineTo(this.x + 290, this.y + 270);
            crc2.lineTo(this.x + 290, this.y + 300);
            crc2.quadraticCurveTo(this.x + 300, this.y + 330, this.x + 310, this.y + 300);
            crc2.lineTo(this.x + 310, this.y + 270);
            crc2.lineTo(this.x + 310, this.y + 300);
            crc2.quadraticCurveTo(this.x + 320, this.y + 330, this.x + 330, this.y + 300);
            crc2.lineTo(this.x + 330, this.y + 270);
            crc2.lineTo(this.x + 330, this.y);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();


            //Unterseite Pfote1
            crc2.fillStyle = "#ED92A6";
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y + 240, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "#ED92A6";
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y + 225, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //Unterseite Pfote2
            crc2.fillStyle = "#ED92A6";
            crc2.beginPath();
            crc2.arc(this.x + 290, this.y + 240, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "#ED92A6";
            crc2.beginPath();
            crc2.arc(this.x + 290, this.y + 225, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();



            //Nase
            crc2.fillStyle = "#ED92A6";
            crc2.beginPath();
            crc2.arc(this.x + 165, this.y + 195, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();

            //Schnurrhaare
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.moveTo(this.x + 165, this.y + 195);
            crc2.lineTo(this.x + 100, this.y + 210);
            crc2.moveTo(this.x + 165, this.y + 195);
            crc2.lineTo(this.x + 100, this.y + 195);
            crc2.moveTo(this.x + 165, this.y + 195);
            crc2.lineTo(this.x + 100, this.y + 180);
            crc2.closePath();
            crc2.stroke();


            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.moveTo(this.x + 165, this.y + 195);
            crc2.lineTo(this.x + 230, this.y + 210);
            crc2.moveTo(this.x + 165, this.y + 195);
            crc2.lineTo(this.x + 230, this.y + 195);
            crc2.moveTo(this.x + 165, this.y + 195);
            crc2.lineTo(this.x + 230, this.y + 180);
            crc2.closePath();
            crc2.stroke();


            //Mund
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.moveTo(this.x + 165, this.y + 170);
            crc2.quadraticCurveTo(this.x + 175, this.y + 180, this.x + 185, this.y + 170);
            crc2.moveTo(this.x + 165, this.y + 170);
            crc2.quadraticCurveTo(this.x + 155, this.y + 180, this.x + 145, this.y + 170);

            crc2.stroke();
        }
    }

}