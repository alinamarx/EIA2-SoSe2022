"use strict";
var BeachClasses;
(function (BeachClasses) {
    class Bird {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            console.log("Bird constructor");
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 200);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Bird move");
            let offset = new Vector(this.velocity.x, this.velocity.y);
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
            console.log("Bird draw");
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(this.position.x, this.position.y);
            BeachClasses.crc2.scale(this.size, this.size);
            BeachClasses.crc2.stroke(birdsPaths);
            BeachClasses.crc2.restore();
        }
    }
    BeachClasses.Bird = Bird;
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Bird%20copy.js.map