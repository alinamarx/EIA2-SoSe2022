namespace BeachClasses {
    console.log("Class Cloud");
    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            console.log("Cloud constructor");

            this.position = _position;
            this.velocity = new Vector(10, 0);

        }

        move(_timeslice: number): void {
            console.log("Cloud move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            console.log("Cloud draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.stroke(cloudsPath);
            crc2.restore();
        }
    }
}