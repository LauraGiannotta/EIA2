var L12_Canvas;
(function (L12_Canvas) {
    function drawAllBackgrounds() {
        drawBackground();
        L12_Canvas.imageData = L12_Canvas.crc2.getImageData(0, 0, 600, 800);
    }
    L12_Canvas.drawAllBackgrounds = drawAllBackgrounds;
    function drawBackground() {
        // Himmel
        L12_Canvas.crc2.fillStyle = "#819FF7";
        L12_Canvas.crc2.fillRect(0, 0, 800, 700);
        //Wise
        L12_Canvas.crc2.fillStyle = "#39D07B";
        L12_Canvas.crc2.fillRect(0, 350, 800, 800);
        L12_Canvas.crc2.fill();
        // Baumstamm
        L12_Canvas.crc2.fillStyle = "#946006";
        L12_Canvas.crc2.fillRect(0, 0, 100, 800);
        //Baum
        L12_Canvas.crc2.fillStyle = "#2F8532";
        L12_Canvas.crc2.beginPath();
        L12_Canvas.crc2.arc(0, 0, 350, 0, 2 * Math.PI);
        L12_Canvas.crc2.fill();
        L12_Canvas.crc2.closePath;
        //        // Berg
        //        crc2.fillStyle = "#298A08";
        //
        //        crc2.beginPath();
        //        crc2.moveTo(0, 600);
        //        crc2.quadraticCurveTo(150, 550, 0, 600);
        //        crc2.quadraticCurveTo(450, 300, 600, 600);
        //        crc2.lineTo(600, 800);
        //        crc2.lineTo(0, 800);
        //        crc2.fill();
    }
})(L12_Canvas || (L12_Canvas = {}));
//# sourceMappingURL=background.js.map