namespace BeachClasses {
    console.log("Class Cloud");
    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            console.log("Cloud constructor");

            this.position = _position;
            this.velocity = _velocity;

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