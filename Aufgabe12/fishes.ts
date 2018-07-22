namespace HungryCats {

    export class Fish extends MovingObjects {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        move(): void {
            this.x -= 2;

            if (this.x < -140)
                this.x = 600;
        }

        draw(): void {
            crc2.fillStyle = "#DB7093";

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);

            crc2.quadraticCurveTo(this.x + 50, this.y - 50, this.x + 100, this.y);
            crc2.lineTo(this.x + 130, this.y + 30);
            crc2.lineTo(this.x + 130, this.y - 25);
            crc2.lineTo(this.x + 100, this.y);
            crc2.quadraticCurveTo(this.x + 50, this.y + 50, this.x, this.y);

            crc2.fill();
            crc2.stroke();

        }
    }


}
