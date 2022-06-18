namespace PolymorphieAnimation {
    console.log("Class Cloud");
    export class Cloud extends Moveable {

        constructor(_position: Vector, _velocity: Vector) {
            console.log("Cloud constructor");

            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;

        }

        draw(): void {
            console.log("Cloud draw");
            let gradientCloud: CanvasGradient = crc2.createRadialGradient(300, 50, 300, 600, 50, 0);
            gradientCloud.addColorStop(0.2, "HSLA(0, 100%, 100%, 1)");
            gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.fillStyle = gradientCloud;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fill(cloudsPath);
            crc2.restore();
        
        }
    }
}