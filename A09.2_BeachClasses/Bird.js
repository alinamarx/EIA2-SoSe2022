"use strict";
var BeachClasses;
(function (BeachClasses) {
    console.log("Class Bird");
    class Bird {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            console.log("Bird constructor");
            this.position = _position;
            this.velocity = new BeachClasses.Vector(0, 0);
            this.velocity.random(50, 180);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new BeachClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += BeachClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += BeachClasses.crc2.canvas.height;
            if (this.position.x > BeachClasses.crc2.canvas.width)
                this.position.x -= BeachClasses.crc2.canvas.width;
            if (this.position.y > BeachClasses.crc2.canvas.height)
                this.position.y -= BeachClasses.crc2.canvas.height;
        }
        draw() {
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(this.position.x, this.position.y);
            BeachClasses.crc2.scale(this.size, this.size);
            BeachClasses.crc2.stroke(BeachClasses.birdsPaths);
            BeachClasses.crc2.restore();
        }
    }
    BeachClasses.Bird = Bird;
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Bird.js.map