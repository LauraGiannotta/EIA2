namespace L12_Canvas {

    export class ToxicBird extends MovingObjects {
        r: number;



        constructor(_x: number, _y: number) {
            super(_x, _y);
        }


        move(): void {
            this.y -= 4;

            if (this.y < -30) {
                this.y = Math.random() * (1000 + 800) + 800;
            }
        }

       

        draw(): void {

            crc2.fillStyle = "#A17349";

            //Schwänzchen
            crc2.fillStyle = "#A17349";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x + 20, this.y + 30);
            crc2.lineTo(this.x - 20, this.y + 30);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();


            //Flügel
            crc2.fillStyle = "#A17349";
            crc2.beginPath();
            crc2.moveTo(this.x + 40, this.y);
            crc2.lineTo(this.x, this.y - 15);
            crc2.lineTo(this.x, this.y + 15);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 40, this.y);
            crc2.lineTo(this.x, this.y - 15);
            crc2.lineTo(this.x, this.y + 15);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();

            //Körper
            crc2.fillStyle = "#EBB668";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();

            //Schnabel
            crc2.fillStyle = "#EDD15D";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 50);
            crc2.lineTo(this.x - 7, this.y - 30);
            crc2.lineTo(this.x + 7, this.y - 30);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();

            //Kopf
            crc2.fillStyle = "#EBB668";
            crc2.beginPath();
            crc2.arc(this.x, this.y - 29, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();

            //Augen
            crc2.fillStyle = "#E20719";
            crc2.beginPath();
            crc2.arc(this.x - 4, this.y - 33, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();


            crc2.beginPath();
            crc2.arc(this.x + 4, this.y - 33, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();


        }
    }


}