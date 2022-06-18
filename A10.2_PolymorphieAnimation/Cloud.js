"use strict";
var PolymorphieAnimation;
(function (PolymorphieAnimation) {
    console.log("Class Cloud");
    class Cloud extends PolymorphieAnimation.Moveable {
        constructor(_position, _velocity) {
            console.log("Cloud constructor");
            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            console.log("Cloud draw");
            let gradientCloud = PolymorphieAnimation.crc2.createRadialGradient(300, 50, 300, 600, 50, 0);
            gradientCloud.addColorStop(0.2, "HSLA(0, 100%, 100%, 1)");
            gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            PolymorphieAnimation.crc2.fillStyle = gradientCloud;
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.translate(this.position.x, this.position.y);
            PolymorphieAnimation.crc2.fill(PolymorphieAnimation.cloudsPath);
            PolymorphieAnimation.crc2.restore();
        }
    }
    PolymorphieAnimation.Cloud = Cloud;
})(PolymorphieAnimation || (PolymorphieAnimation = {}));
//# sourceMappingURL=Cloud.js.map