var Aufgabe11;
(function (Aufgabe11) {
    class Background {
        paint() {
            this.drawWaterAndSand();
            this.drawPatrickStar(250, 500);
            this.drawGras(475, 633);
            this.drawGras(500, 627);
            this.drawGras(525, 633);
            this.drawKies(200, 700);
            this.drawKies(300, 750);
            this.drawKies(150, 675);
            this.drawKies(200, 600);
            this.drawKies(100, 725);
            this.drawKies(575, 790);
            this.drawKies(550, 650);
            this.drawKies(365, 775);
            this.drawKies(425, 735);
            this.drawKies(50, 625);
            this.drawKies(360, 655);
        }
        //Wasser als Hintergrund f�r das gesamte Canvas inkl. Sand
        drawWaterAndSand() {
            //Wasser
            Aufgabe11.crc2.fillStyle = "#7EC0EE";
            Aufgabe11.crc2.fillRect(0, 0, 600, 800);
            //Funktionsaufruf f�r Gras zwischen den 2 Ebenen
            //Patrick Stars Haus
            Aufgabe11.crc2.fillStyle = "#A0522D";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, 650);
            Aufgabe11.crc2.quadraticCurveTo(200, 275, 400, 650);
            Aufgabe11.crc2.lineTo(0, 650);
            Aufgabe11.crc2.fill();
            //Sand
            Aufgabe11.crc2.fillStyle = "#FFE4B5";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(0, 600);
            //die 150 und 550 ist der h�chste Punkt der Welle
            Aufgabe11.crc2.quadraticCurveTo(150, 550, 300, 600);
            Aufgabe11.crc2.quadraticCurveTo(450, 650, 600, 600);
            Aufgabe11.crc2.lineTo(600, 800);
            Aufgabe11.crc2.lineTo(0, 800);
            Aufgabe11.crc2.fill();
            //Kies
        }
        drawGras(_x, _y) {
            Aufgabe11.crc2.fillStyle = "#556B2F";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.quadraticCurveTo(_x + 15, _y - 12, _x, _y - 37);
            Aufgabe11.crc2.quadraticCurveTo(_x - 10, _y - 52, _x + 5, _y - 77);
            Aufgabe11.crc2.quadraticCurveTo(_x, _y - 54, _x + 10, _y - 37);
            Aufgabe11.crc2.quadraticCurveTo(_x + 25, _y - 22, _x, _y);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
        //Kies
        drawKies(_x, _y) {
            Aufgabe11.crc2.fillStyle = "#7A8B8B";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
        drawPatrickStar(_x, _y) {
            Aufgabe11.crc2.fillStyle = "#FF4040";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.lineTo(_x + 25, _y + 45);
            Aufgabe11.crc2.lineTo(_x - 30, _y + 25);
            Aufgabe11.crc2.lineTo(_x + 30, _y + 25);
            Aufgabe11.crc2.lineTo(_x - 25, _y + 45);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Background = Background;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Background.js.map