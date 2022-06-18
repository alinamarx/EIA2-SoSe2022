"use strict";
var PolymorphieAnimation;
(function (PolymorphieAnimation) {
    console.log("Paths");
    PolymorphieAnimation.radiusParticle = 40;
    PolymorphieAnimation.path = new Path2D();
    function createPaths() {
        PolymorphieAnimation.birdsPaths = createBirdPath();
        PolymorphieAnimation.cloudsPath = createCloudPath();
    }
    PolymorphieAnimation.createPaths = createPaths;
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
        PolymorphieAnimation.path.bezierCurveTo(140, 100, 130, 150, 230, 150);
        PolymorphieAnimation.path.bezierCurveTo(250, 180, 320, 180, 340, 150);
        PolymorphieAnimation.path.bezierCurveTo(420, 150, 420, 120, 390, 100);
        PolymorphieAnimation.path.bezierCurveTo(430, 40, 370, 30, 340, 50);
        PolymorphieAnimation.path.bezierCurveTo(320, 5, 250, 20, 250, 50);
        PolymorphieAnimation.path.bezierCurveTo(200, 5, 150, 50, 170, 80);
        PolymorphieAnimation.crc2.fill(PolymorphieAnimation.path);
        PolymorphieAnimation.path.closePath();
        // let x: number = (Math.random() - 0.5) * 325;
        // let y: number = (Math.random() - 0.5) * 80;
        return PolymorphieAnimation.path;
    }
})(PolymorphieAnimation || (PolymorphieAnimation = {}));
//# sourceMappingURL=Paths.js.map