"use strict";
var PolymorphieAnimation;
(function (PolymorphieAnimation) {
    console.log("main");
    window.addEventListener("load", handleLoad);
    let moveables = [];
    function handleLoad(_event) {
        PolymorphieAnimation.canvas = document.querySelector("canvas");
        PolymorphieAnimation.crc2 = PolymorphieAnimation.canvas.getContext("2d");
        PolymorphieAnimation.createPaths();
        PolymorphieAnimation.crc2.lineWidth = 2;
        PolymorphieAnimation.crc2.lineCap = "round";
        PolymorphieAnimation.crc2.lineJoin = "round";
        PolymorphieAnimation.crc2.save();
        createBirds(6);
        PolymorphieAnimation.crc2.restore();
        createClouds(120, 20);
        window.setInterval(update, 20);
    }
    function createBirds(_nBirds) {
        console.log("create Birds");
        for (let i = 0; i < _nBirds; i++) {
            let randomSize = randomNumberGenerator(1, 3);
            let spawnRandomizer = randomNumberGenerator(0, 1);
            let randomPositionX = randomNumberGenerator(0, PolymorphieAnimation.canvas.width);
            let randomPositionY = randomNumberGenerator(0, PolymorphieAnimation.canvas.height);
            let fixedPosition = 0;
            let position;
            if (spawnRandomizer == 0) {
                position = new PolymorphieAnimation.Vector(fixedPosition, randomPositionX);
            }
            else {
                position = new PolymorphieAnimation.Vector(randomPositionY, fixedPosition);
            }
            let bird = new PolymorphieAnimation.Bird(randomSize, position);
            moveables.push(bird);
        }
    }
    function createClouds(_firstCloudY, _secondCloudY) {
        console.log("create Clouds");
        let positionFirst = new PolymorphieAnimation.Vector(-30, _firstCloudY);
        let velocityFirst = new PolymorphieAnimation.Vector(10, 0);
        let positionSecond = new PolymorphieAnimation.Vector(1000, _secondCloudY);
        let velocitySecond = new PolymorphieAnimation.Vector(-10, 0);
        let cloud1 = new PolymorphieAnimation.Cloud(positionFirst, velocityFirst);
        let cloud2 = new PolymorphieAnimation.Cloud(positionSecond, velocitySecond);
        moveables.push(cloud1, cloud2);
    }
    function randomNumberGenerator(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min) + _min);
        return random;
    }
    function update() {
        paintCanvas();
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function paintCanvas() {
        colorBackground();
        drawSun();
        drawBeach();
        let elementsPosition = new PolymorphieAnimation.Vector(710, 185);
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
    function colorBackground() {
        let sky = PolymorphieAnimation.crc2.createLinearGradient(0, 0, 0, 800);
        sky.addColorStop(0, "#8565C4");
        sky.addColorStop(0.15, "#FFB6C1");
        sky.addColorStop(0.3, "#ff781f");
        PolymorphieAnimation.crc2.fillStyle = sky;
        PolymorphieAnimation.crc2.fillRect(0, 0, PolymorphieAnimation.canvas.width, PolymorphieAnimation.canvas.height);
        let ocean = PolymorphieAnimation.crc2.createLinearGradient(0, 0, 0, 700);
        ocean.addColorStop(0.28, "white");
        ocean.addColorStop(0.38, "#ff781f");
        ocean.addColorStop(0.5, "HSL(240, 50%, 45%)");
        ocean.addColorStop(0.8, "#4C125E");
        PolymorphieAnimation.crc2.fillStyle = ocean;
        PolymorphieAnimation.crc2.fillRect(0, 250, PolymorphieAnimation.canvas.width, 700);
    }
    function drawSun() {
        let r1 = 20;
        let r2 = 80;
        let sunshine = PolymorphieAnimation.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        sunshine.addColorStop(0, "HSLA(60 , 96% , 83%, 1)");
        sunshine.addColorStop(1, "HSLA(70 , 96% , 79%, 0)");
        PolymorphieAnimation.crc2.save();
        PolymorphieAnimation.crc2.translate(170, 170);
        PolymorphieAnimation.crc2.fillStyle = sunshine;
        PolymorphieAnimation.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        PolymorphieAnimation.crc2.fill();
        PolymorphieAnimation.crc2.restore();
    }
    function drawBeach() {
        PolymorphieAnimation.crc2.save();
        PolymorphieAnimation.crc2.translate(400, 250);
        PolymorphieAnimation.crc2.save();
        PolymorphieAnimation.crc2.beginPath();
        PolymorphieAnimation.crc2.moveTo(0, 0);
        PolymorphieAnimation.crc2.bezierCurveTo(300, -60, 500, -50, 858, -40);
        PolymorphieAnimation.crc2.lineTo(860, 308);
        PolymorphieAnimation.crc2.fillStyle = "#C2B280";
        PolymorphieAnimation.crc2.fill();
        PolymorphieAnimation.crc2.strokeStyle = "#C2B280";
        PolymorphieAnimation.crc2.stroke();
        PolymorphieAnimation.crc2.restore();
        PolymorphieAnimation.crc2.beginPath();
        PolymorphieAnimation.crc2.moveTo(0, 0);
        PolymorphieAnimation.crc2.bezierCurveTo(80, 100, 300, 100, 450, 330);
        PolymorphieAnimation.crc2.lineTo(860, 308);
        PolymorphieAnimation.crc2.lineTo(860, 0);
        PolymorphieAnimation.crc2.fillStyle = "#C2B280";
        PolymorphieAnimation.crc2.fill();
        PolymorphieAnimation.crc2.strokeStyle = "RGBA(255, 255, 255, 0.8)";
        PolymorphieAnimation.crc2.lineWidth = 7;
        PolymorphieAnimation.crc2.lineCap = "round";
        PolymorphieAnimation.crc2.stroke();
        PolymorphieAnimation.crc2.closePath();
        PolymorphieAnimation.crc2.restore();
    }
    function drawPlants(_position) {
        let nStrands = 50;
        let strand = new Path2D();
        PolymorphieAnimation.crc2.fillStyle = "#285D34";
        PolymorphieAnimation.crc2.lineWidth = 10;
        strand.moveTo(5, 0);
        strand.lineTo(-4, 28);
        strand.lineTo(3, 25);
        strand.moveTo(0, 0);
        strand.ellipse(6, -3, 2, 6, Math.PI / 11, 0, 2 * Math.PI);
        PolymorphieAnimation.crc2.save();
        PolymorphieAnimation.crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nStrands; drawn++) {
            PolymorphieAnimation.crc2.fill(strand);
            PolymorphieAnimation.crc2.translate(5, -6);
            PolymorphieAnimation.crc2.fill(strand);
            PolymorphieAnimation.crc2.translate(10, 3);
            PolymorphieAnimation.crc2.fill(strand);
            PolymorphieAnimation.crc2.translate(0, -2);
            PolymorphieAnimation.crc2.fill(strand);
            PolymorphieAnimation.crc2.translate(15, 5);
            PolymorphieAnimation.crc2.fill(strand);
            PolymorphieAnimation.crc2.translate(20, 0);
        }
        PolymorphieAnimation.crc2.restore();
    }
    function drawPeople(_state, _position) {
        if (_state == "swimming") {
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.translate(_position.x, _position.y);
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.beginPath();
            PolymorphieAnimation.crc2.rotate(-45);
            PolymorphieAnimation.crc2.moveTo(0, 0);
            PolymorphieAnimation.crc2.lineTo(0, -15);
            PolymorphieAnimation.crc2.rotate(45);
            PolymorphieAnimation.crc2.restore();
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.rotate(15);
            PolymorphieAnimation.crc2.moveTo(0, 0);
            PolymorphieAnimation.crc2.lineTo(-15, 0);
            PolymorphieAnimation.crc2.rotate(-15);
            PolymorphieAnimation.crc2.restore();
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.moveTo(0, 0);
            PolymorphieAnimation.crc2.lineTo(0, -8);
            PolymorphieAnimation.crc2.closePath();
            PolymorphieAnimation.crc2.restore();
            PolymorphieAnimation.crc2.translate(0, -8);
            PolymorphieAnimation.crc2.moveTo(5, -4);
            PolymorphieAnimation.crc2.arc(0, -4, 5, 0, 2 * Math.PI);
            PolymorphieAnimation.crc2.lineWidth = 2;
            PolymorphieAnimation.crc2.fillStyle = "black";
            PolymorphieAnimation.crc2.stroke();
            PolymorphieAnimation.crc2.fill();
            PolymorphieAnimation.crc2.restore();
        }
        else if (_state == "surfing") {
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.translate(_position.x, _position.y);
            PolymorphieAnimation.crc2.save();
            let surfboard = new Path2D();
            surfboard.ellipse(1, 2, 10, 30, Math.PI / 3, 0, 2 * Math.PI);
            PolymorphieAnimation.crc2.fillStyle = "#BCE3B9";
            PolymorphieAnimation.crc2.fill(surfboard);
            PolymorphieAnimation.crc2.restore();
            let person = new Path2D();
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
            PolymorphieAnimation.crc2.lineWidth = 2;
            PolymorphieAnimation.crc2.stroke(person);
            PolymorphieAnimation.crc2.fillStyle = "black";
            PolymorphieAnimation.crc2.fill(person);
            PolymorphieAnimation.crc2.restore();
        }
        else if (_state == "sunbathing") {
            PolymorphieAnimation.crc2.save();
            PolymorphieAnimation.crc2.translate(_position.x, _position.y);
            let towel = new Path2D();
            towel.moveTo(-18, -4);
            towel.lineTo(23, -26);
            towel.lineTo(39, -7);
            towel.lineTo(-5, 16);
            PolymorphieAnimation.crc2.fillStyle = "#83DCDD";
            PolymorphieAnimation.crc2.fill(towel);
            let person = new Path2D();
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
            PolymorphieAnimation.crc2.rotate(45);
            PolymorphieAnimation.crc2.lineWidth = 2;
            PolymorphieAnimation.crc2.stroke(person);
            PolymorphieAnimation.crc2.fillStyle = "black";
            PolymorphieAnimation.crc2.fill(person);
            PolymorphieAnimation.crc2.restore();
        }
    }
})(PolymorphieAnimation || (PolymorphieAnimation = {}));
//# sourceMappingURL=beach.js.map