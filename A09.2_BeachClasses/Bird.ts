namespace BeachClasses {
    
    console.log("Class Bird");
    export class Bird {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position: Vector) {
            console.log("Bird constructor");

            this.position = _position;
            
            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 200);

            this.size = _size;
        }

        move(_timeslice: number): void {
            console.log("Bird move");
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
            console.log("Bird draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.stroke(birdsPaths);
            crc2.restore();
        }
    }
}