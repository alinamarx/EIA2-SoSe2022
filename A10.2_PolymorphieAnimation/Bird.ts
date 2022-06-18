namespace PolymorphieAnimation {
    
    console.log("Class Bird");
    export class Bird extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {

            if (_position) {
                super(_position);
                this.position = _position;
            } else {
                super(_position);
                this.position = new Vector(0, 0);
            }

            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 180);

            this.size = _size;
        }

        draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.stroke(birdsPaths);
            crc2.restore();
        }
    }
}