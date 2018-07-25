namespace L12_Canvas {
    export function drawAllBackgrounds(): void {
        drawBackground();
        imageData = crc2.getImageData(0, 0, 600, 800);
    }

    function drawBackground(): void {


        // Himmel
        crc2.fillStyle = "#819FF7";
        crc2.fillRect(0, 0, 800, 700);

        //Wise
        crc2.fillStyle = "#39D07B";
        crc2.fillRect(0, 350, 800, 800);
        crc2.fill();


        // Baumstamm
        crc2.fillStyle = "#946006";
        crc2.fillRect(0, 0, 100, 800);
        
        //Baum
        crc2.fillStyle = "#2F8532";
        crc2.beginPath();
        crc2.arc(0, 0,  350, 0, 2 * Math.PI);
        
        crc2.fill();
        crc2.closePath;
    }
}