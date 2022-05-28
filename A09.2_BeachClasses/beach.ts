namespace BeachClasses {
    console.log("main");

    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let canvasWidth: number;

    let birds: Bird [] = [];
    let clouds: Cloud[] = [];

    function handleLoad(_event: Event): void {
        
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        createPaths();
        
        crc2.lineWidth = 2;
        crc2.lineCap = "round";
        crc2.lineJoin = "round";

        crc2.save();
        createBirds(6);
        crc2.restore();

        createClouds(120, 20);
        window.setInterval(update, 20);
    }

    function createBirds(_nBirds: number): void {
        console.log("create Birds");
        
        for (let i: number = 0; i < _nBirds; i ++) {
            let randomSize: number = randomNumberGenerator(1, 3); 
            let spawnRandomizer: number = randomNumberGenerator(0, 1);
            let randomPositionX: number = randomNumberGenerator(0, canvas.width);
            let randomPositionY: number = randomNumberGenerator(0, canvas.height);
            let fixedPosition: number = 0;
            let position: BeachClasses.Vector;

            if (spawnRandomizer == 0) {
               position = new Vector(fixedPosition, randomPositionX);
            } else {
                position = new Vector(randomPositionY, fixedPosition); 
            } 
            let bird: Bird = new Bird(randomSize, position);
            birds.push(bird);
        }
    }

    function createClouds(_firstCloudY: number, _secondCloudY: number): void {
        console.log("create Clouds");
    
        let positionFirst: BeachClasses.Vector = new Vector(-30, _firstCloudY);
        let velocityFirst: Vector = new Vector(10, 0);
    
        let positionSecond: BeachClasses.Vector = new Vector(1000, _secondCloudY);
        let velocitySecond: Vector = new Vector(-10, 0);
        let cloud1: Cloud = new Cloud(positionFirst, velocityFirst);
        let cloud2: Cloud = new Cloud(positionSecond, velocitySecond);
        clouds.push(cloud1, cloud2);

        console.log(clouds);
    }

    function randomNumberGenerator (_min: number, _max: number): number {
        let random: number = Math.floor(Math.random() * (_max - _min) + _min);
        return random;
    }

    function update(): void {
        paintCanvas();

        for (let bird of birds) {
            bird.move(1 / 50);
            bird.draw();
        }

        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.draw();
        }
    }

    function paintCanvas(): void {

        colorBackground();
        drawSun();

        drawBeach();
        let elementsPosition: Vector = new Vector(710, 185);
        drawPlants(elementsPosition);
        elementsPosition.set(800, 220);
        drawPlants(elementsPosition);
        elementsPosition.set(935, 245);
        drawPlants(elementsPosition);

        elementsPosition.set(150, 280);
        drawPeople("swimming", elementsPosition);
        elementsPosition.set(210, 265);
        drawPeople("swimming", elementsPosition);        
        elementsPosition.set(500, 500);
        drawPeople("swimming", elementsPosition);
        elementsPosition.set(460, 430);
        drawPeople("swimming", elementsPosition);
        elementsPosition.set(120, 480);
        drawPeople("surfing", elementsPosition);
        elementsPosition.set(200, 380);
        drawPeople("surfing", elementsPosition);
        elementsPosition.set(920, 410);
        drawPeople("sunbathing", elementsPosition);
        elementsPosition.set(960, 440);
        drawPeople("sunbathing", elementsPosition);
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
        ocean.addColorStop(0.5, "HSL(240, 50%, 45%)");
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
        strand.lineTo(-4, 28);
        strand.lineTo(3, 25);
        strand.moveTo(0, 0);
        strand.ellipse(6, -3, 2, 6, Math.PI / 11, 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(_position.x, _position.y);

        for (let drawn: number = 0; drawn < nStrands; drawn++) {

            crc2.fill(strand);
            crc2.translate(5, -6);
            crc2.fill(strand);
            crc2.translate(10, 3);
            crc2.fill(strand);
            crc2.translate(0, -2);
            crc2.fill(strand);
            crc2.translate(15, 5);
            crc2.fill(strand);
            crc2.translate(20, 0);
        }

        crc2.restore();

    }

    function drawPeople(_state: string, _position: Vector): void {

        if (_state == "swimming") {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.save();

            crc2.beginPath();
            crc2.rotate(-45);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -15);
            crc2.rotate(45);
            crc2.restore();
            crc2.save();

            crc2.rotate(15);
            crc2.moveTo(0, 0);
            crc2.lineTo(-15, 0);
            crc2.rotate(-15);
            crc2.restore();
            crc2.save();

            crc2.moveTo(0, 0);
            crc2.lineTo(0, -8);
            crc2.closePath();
            crc2.restore();

            crc2.translate(0, -8);
            crc2.moveTo(5, -4);
            crc2.arc(0, -4, 5, 0, 2 * Math.PI);

            crc2.lineWidth = 2;
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.fill();
            crc2.restore();

        } else if (_state == "surfing") {

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.save();

            let surfboard: Path2D = new Path2D();
            surfboard.ellipse(1, 2, 10, 30, Math.PI / 3, 0, 2 * Math.PI);
            crc2.fillStyle = "#BCE3B9";
            crc2.fill(surfboard);
            crc2.restore();

            let person: Path2D = new Path2D();
            person.moveTo(0, -10);
            person.lineTo(8, 6);

            person.moveTo(0, -10);
            person.lineTo(-8, 4);

            person.moveTo(0, -10);
            person.lineTo(0, -20);

            person.moveTo(0, -20);
            person.lineTo(-10, -9);
            person.moveTo(0, -20);
            person.lineTo(10, -6);

            person.moveTo(5, -26);
            person.arc(0, -26, 5, 0, 2 * Math.PI);

            crc2.lineWidth = 2;
            crc2.stroke(person);
            crc2.fillStyle = "black";
            crc2.fill(person);

            crc2.restore();
        } else if (_state == "sunbathing") {

            crc2.save();
            crc2.translate(_position.x, _position.y);

            let towel: Path2D = new Path2D();
            towel.moveTo(-18, -4);
            towel.lineTo(23, -26);
            towel.lineTo(39, -7);
            towel.lineTo(-5, 16);

            crc2.fillStyle = "#83DCDD";
            crc2.fill(towel);

            let person: Path2D = new Path2D();
            person.moveTo(0, -10);
            person.lineTo(8, 6);

            person.moveTo(0, -10);
            person.lineTo(-8, 4);

            person.moveTo(0, -10);
            person.lineTo(0, -20);

            person.moveTo(0, -20);
            person.lineTo(-10, -9);
            person.moveTo(0, -20);
            person.lineTo(10, -6);

            person.moveTo(5, -26);
            person.arc(0, -26, 5, 0, 2 * Math.PI);

            crc2.rotate(45);
            crc2.lineWidth = 2;
            crc2.stroke(person);
            crc2.fillStyle = "black";
            crc2.fill(person);

            crc2.restore();
        }
    }    
}
