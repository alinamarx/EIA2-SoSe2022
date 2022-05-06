"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let gradient = crc2.createLinearGradient(0, 0, 0, 700);
        let colorArray = ["#4661EE", "#EC5657", "#1BCDD1", "#8FAABB", "#B08BEB", "#3EA0DD", "#F5A52A", "#23BFAA", "#FAA586", "#EB8CC6"];
        gradient.addColorStop(0, colorArray[Math.floor(Math.random() * (9 + 1))]);
        gradient.addColorStop(.5, colorArray[Math.floor(Math.random() * (9 + 1))]);
        gradient.addColorStop(1, colorArray[Math.floor(Math.random() * (9 + 1))]);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = Math.floor(Math.random() * (30 + 1)); i < canvas.width; i += 30) {
            crc2.beginPath();
            crc2.arc(i, Math.floor(Math.random() * (canvas.height + 1)), Math.floor(Math.random() * (100 + 1)), 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            for (let i = Math.floor(Math.random() * (100 + 1)); i < canvas.height; i += 100) {
                crc2.beginPath();
                crc2.arc(Math.floor(Math.random() * (canvas.width + 1)), i, Math.floor(Math.random() * (50 + 1)), 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
            }
        }
        let randomNumber = Math.floor(Math.random() * (2 + 1));
        if (randomNumber == 0) {
            crc2.strokeStyle = "black";
            crc2.lineWidth = 10;
        }
        else if (randomNumber == 1) {
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
        }
        else if (randomNumber == 2) {
            crc2.strokeStyle = "blue";
            crc2.lineWidth = 15;
        }
        for (let i = 0; i <= 10; i++) {
            crc2.translate(Math.floor(Math.random() * (canvas.width + 1)), Math.floor(Math.random() * (canvas.height + 1)));
            let randomNumberStar = Math.floor(Math.random() * (30 + 1));
            for (let j = 8; j <= randomNumberStar; j++) {
                crc2.beginPath();
                crc2.lineTo(100, 100);
                crc2.lineTo(10, 10);
                crc2.closePath();
                crc2.stroke();
                crc2.rotate(360 / randomNumberStar);
            }
            crc2.resetTransform();
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map