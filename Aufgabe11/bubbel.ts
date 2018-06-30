namespace Aufgabe11 {

    export class Bubble extends MovingObjects {
        r: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        move(): void {
            this.y -= 2;

            if (this.y < -5) {
                this.y = 600;
            }
        }


        draw(): void {
            crc2.fillStyle = "#8EE5EE";

            crc2.beginPath();

            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }

}