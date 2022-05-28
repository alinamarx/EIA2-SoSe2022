"use strict";
var BeachClasses;
(function (BeachClasses) {
    console.log("Paths");
    BeachClasses.radiusParticle = 40;
    BeachClasses.path = new Path2D();
    function createPaths() {
        BeachClasses.birdsPaths = createBirdPath();
        BeachClasses.cloudsPath = createCloudPath();
    }
    BeachClasses.createPaths = createPaths;
    function createBirdPath() {
        let path = new Path2D();
        path.moveTo(0, 0);
        path.lineTo(-10, -10);
        path.lineTo(-20, 0);
        path.moveTo(0, 0);
        path.lineTo(10, -10);
        path.lineTo(20, 3);
        return path;
    }
    function createCloudPath() {
        BeachClasses.path.bezierCurveTo(140, 100, 130, 150, 230, 150);
        BeachClasses.path.bezierCurveTo(250, 180, 320, 180, 340, 150);
        BeachClasses.path.bezierCurveTo(420, 150, 420, 120, 390, 100);
        BeachClasses.path.bezierCurveTo(430, 40, 370, 30, 340, 50);
        BeachClasses.path.bezierCurveTo(320, 5, 250, 20, 250, 50);
        BeachClasses.path.bezierCurveTo(200, 5, 150, 50, 170, 80);
        BeachClasses.crc2.fill(BeachClasses.path);
        BeachClasses.path.closePath();
        // let x: number = (Math.random() - 0.5) * 325;
        // let y: number = (Math.random() - 0.5) * 80;
        return BeachClasses.path;
    }
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Paths.js.map