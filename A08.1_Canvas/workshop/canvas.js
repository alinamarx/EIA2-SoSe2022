"use strict";
var CanvasTest;
(function (CanvasTest) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    console.log("rectangle");
    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();
})(CanvasTest || (CanvasTest = {}));
//# sourceMappingURL=canvas.js.map