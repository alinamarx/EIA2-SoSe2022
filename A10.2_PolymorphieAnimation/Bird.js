"use strict";
var PolymorphieAnimation;
(function (PolymorphieAnimation) {
    console.log("Class Bird");
    class Bird extends PolymorphieAnimation.Moveable {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position) {
                super(_position);
                this.position = _position;
            }
            else {
                super(_position);
                this.position = new PolymorphieAnimation.Vector(0, 0);
            }
            this.velocity = new PolymorphieAnimation.Vector(0, 0);
            this.velocity.random(50, 180);
            this.size = _size;
        }
        draw() {
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.translate(this.position.x, this.position.y);
            PolymorphieAnimation.crc2.scale(this.size, this.size);
            PolymorphieAnimation.crc2.stroke(PolymorphieAnimation.birdsPaths);
            PolymorphieAnimation.crc2.restore();
        }
    }
    PolymorphieAnimation.Bird = Bird;
})(PolymorphieAnimation || (PolymorphieAnimation = {}));
//# sourceMappingURL=Bird.js.map