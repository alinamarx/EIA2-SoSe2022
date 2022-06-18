"use strict";
var PolymorphieAnimation;
(function (PolymorphieAnimation) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new PolymorphieAnimation.Vector(0, 0);
            this.velocity = new PolymorphieAnimation.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = new PolymorphieAnimation.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += PolymorphieAnimation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += PolymorphieAnimation.crc2.canvas.height;
            if (this.position.x > PolymorphieAnimation.crc2.canvas.width)
                this.position.x -= PolymorphieAnimation.crc2.canvas.width;
            if (this.position.y > PolymorphieAnimation.crc2.canvas.height)
                this.position.y -= PolymorphieAnimation.crc2.canvas.height;
        }
        draw() {
            // console.log("draw Moveable");
        }
    }
    PolymorphieAnimation.Moveable = Moveable;
})(PolymorphieAnimation || (PolymorphieAnimation = {}));
//# sourceMappingURL=Moveable.js.map