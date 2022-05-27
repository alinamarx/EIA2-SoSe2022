"use strict";
var BeachClasses;
(function (BeachClasses) {
    console.log("Paths");
    BeachClasses.shapeBirds = [];
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
        BeachClasses.crc2.lineWidth = 4;
        BeachClasses.crc2.lineCap = "round";
        BeachClasses.crc2.lineJoin = "round";
        path.closePath();
        return path;
    }
    function createCloudPath() {
        let nParticles = 25;
        let radiusParticle = 40;
        let gradientCloud = BeachClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let path = new Path2D();
        path.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0.2, "HSLA(0, 100%, 100%, 1)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        BeachClasses.crc2.fillStyle = gradientCloud;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            BeachClasses.crc2.save();
            let x = (Math.random() - 0.5) * 325;
            let y = (Math.random() - 0.5) * 80;
            BeachClasses.crc2.translate(x, y);
            BeachClasses.crc2.fill(path);
            BeachClasses.crc2.restore();
        }
        path.closePath();
        return path;
    }
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Paths.js.map