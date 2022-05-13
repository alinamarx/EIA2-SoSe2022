namespace CanvasBeach {

    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        paintCanvas();
    }

    function paintCanvas(): void {

        colorBackground();
        drawSun();

        drawClouds({ x: 480, y: 140 });
        drawClouds({ x: 1050, y: 50 });

        drawBeach();
        drawPlants({x: 1000, y: 200});
        drawPlants({x: 910, y: 230});
        drawPlants({x: 1300, y: 270});

        drawPeople("swimming", {x: 200, y: 200});
        drawPeople("surfing", {x: 100, y: 100});
        drawPeople("sunbathing", {x: 400, y: 400});
        // drawBirds();
    }

    function colorBackground(): void {
        let sky: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        sky.addColorStop(0, "#8565C4");
        sky.addColorStop(0.15, "#FFB6C1");
        sky.addColorStop(0.3, "#ff781f");

        crc2.fillStyle = sky;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        let ocean: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
        ocean.addColorStop(0.28, "white");
        ocean.addColorStop(0.38, "#ff781f");
        ocean.addColorStop(0.47, "#0B2275");
        ocean.addColorStop(0.8, "#4C125E");

        crc2.fillStyle = ocean;
        crc2.fillRect(0, 250, canvas.width, 700);
    }

    function drawSun(): void {
        let r1: number = 20;
        let r2: number = 80;
        let sunshine: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        sunshine.addColorStop(0, "HSLA(60 , 96% , 83%, 1)");
        sunshine.addColorStop(1, "HSLA(70 , 96% , 79%, 0)");

        crc2.save();
        crc2.translate(170, 170);
        crc2.fillStyle = sunshine;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawClouds(_position: Vector): void {

        let nParticles: number = 25;
        let radiusParticle: number = 40;
        let particle: Path2D = new Path2D();
        let gradientCloud: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0.2, "HSLA(0, 100%, 100%, 1)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientCloud;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * 325;
            let y: number = (Math.random() - 0.5) * 80;
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }

    function drawBeach(): void {
        crc2.save();
        crc2.translate(400, 250);
        crc2.save();

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(300, -60, 500, -50, 858, -40);
        crc2.lineTo(860, 308);
        crc2.fillStyle = "#C2B280";
        crc2.fill();
        crc2.strokeStyle = "#C2B280";
        crc2.stroke();

        crc2.restore();

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(80, 100, 300, 100, 450, 330);
        crc2.lineTo(860, 308);
        crc2.lineTo(860, 0);
        crc2.fillStyle = "#C2B280";
        crc2.fill();
        crc2.strokeStyle = "RGBA(255, 255, 255, 0.8)";
        crc2.lineWidth = 7;
        crc2.lineCap = "round";
        crc2.stroke();
        crc2.closePath();

        crc2.restore();

    }

    function drawPlants(_position: Vector): void {

        let nStrands: number = 50;
        let strand: Path2D = new Path2D();

        crc2.fillStyle = "#285D34";
        crc2.lineWidth = 10;

        strand.moveTo(5, 0);
        strand.lineTo(-2, 28);
        strand.lineTo(3, 25);
        strand.moveTo(0, 0);
        strand.ellipse(6, -3, 2, 6, Math.PI / 11, 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(_position.x, _position.y);

        for (let drawn: number = 0; drawn < nStrands; drawn++) {

        crc2.save();
        let x: number = (Math.random() - 0.5) * 750;
        let y: number = (Math.random() - 0.5) * 35;
        crc2.translate(x, y);
        crc2.fill(strand);
        crc2.restore();
        }

        crc2.restore();

    }

    function drawPeople (state: string, _position: Vector): void {
        
        if (state == "swimming") {

        } else if (state == "surfing") {

        } else if (state == "sunbathing") {

        }
    }
}
