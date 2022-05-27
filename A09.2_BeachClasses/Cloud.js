"use strict";
var BeachClasses;
(function (BeachClasses) {
    console.log("Class Cloud");
    class Cloud {
        position;
        velocity;
        constructor(_position) {
            console.log("Cloud constructor");
            this.position = _position;
            this.velocity = new BeachClasses.Vector(10, 0);
        }
        move(_timeslice) {
            console.log("Cloud move");
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
            console.log("Cloud draw");
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(this.position.x, this.position.y);
            BeachClasses.crc2.stroke(BeachClasses.cloudsPath);
            BeachClasses.crc2.restore();
        }
    }
    BeachClasses.Cloud = Cloud;
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Cloud.js.map