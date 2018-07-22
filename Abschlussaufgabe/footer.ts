namespace HungryCat {
        

    export class Food extends MovingObjects {
                scale: number;


       r: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

}
        move(): void {
            this.y += 10;
            

            if (this.y > 630) {
                this.y = 630;
            }

        }

draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 5 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(80, 20, 20)";
            crc2.fill();
        }
    }

}