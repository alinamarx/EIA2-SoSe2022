namespace BeachClasses {

    console.log("Paths");
    export let birdsPaths: Path2D;
    export let cloudsPath: Path2D;

    export let shapeBirds: number[] = [];


    export function createPaths(): void {
        birdsPaths = createBirdPath();
        cloudsPath = createCloudPath();
    }

    function createBirdPath(): Path2D {
        let path: Path2D = new Path2D();
        path.moveTo(0, 0);
        path.lineTo(-10, -10);
        path.lineTo(-20, 0);
        path.moveTo(0, 0);
        path.lineTo(10, -10);
        path.lineTo(20, 3);

        crc2.lineWidth = 4;
        crc2.lineCap = "round";
        crc2.lineJoin = "round";
        
        path.closePath();
        return path;   
    }

    function createCloudPath(): Path2D {

        let nParticles: number = 25;
        let radiusParticle: number = 40;
        let gradientCloud: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        let path: Path2D = new Path2D();
        path.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0.2, "HSLA(0, 100%, 100%, 1)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.fillStyle = gradientCloud;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * 325;
            let y: number = (Math.random() - 0.5) * 80;
            crc2.translate(x, y);
            crc2.fill(path);
            crc2.restore();
        }
        path.closePath();

        return path;
    }
}