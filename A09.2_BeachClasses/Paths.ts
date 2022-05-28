namespace BeachClasses {

    console.log("Paths");
    export let birdsPaths: Path2D;
    export let cloudsPath: Path2D;

    export let radiusParticle: number = 40;
    export let path: Path2D = new Path2D();

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
        
        return path;
    }

    function createCloudPath(): Path2D {

        path.bezierCurveTo(140, 100, 130, 150, 230, 150);
        path.bezierCurveTo(250, 180, 320, 180, 340, 150);
        path.bezierCurveTo(420, 150, 420, 120, 390, 100);
        path.bezierCurveTo(430, 40, 370, 30, 340, 50);
        path.bezierCurveTo(320, 5, 250, 20, 250, 50);
        path.bezierCurveTo(200, 5, 150, 50, 170, 80);
        crc2.fill(path);
        path.closePath();
        // let x: number = (Math.random() - 0.5) * 325;
        // let y: number = (Math.random() - 0.5) * 80;

        return path;
    }
}