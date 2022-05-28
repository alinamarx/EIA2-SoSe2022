"use strict";
var BeachClasses;
(function (BeachClasses) {
    console.log("main");
    window.addEventListener("load", handleLoad);
    let birds = [];
    let clouds = [];
    function handleLoad(_event) {
        BeachClasses.canvas = document.querySelector("canvas");
        BeachClasses.crc2 = BeachClasses.canvas.getContext("2d");
        BeachClasses.createPaths();
        BeachClasses.crc2.lineWidth = 2;
        BeachClasses.crc2.lineCap = "round";
        BeachClasses.crc2.lineJoin = "round";
        BeachClasses.crc2.save();
        createBirds(6);
        BeachClasses.crc2.restore();
        createClouds(120, 20);
        window.setInterval(update, 20);
    }
    function createBirds(_nBirds) {
        console.log("create Birds");
        for (let i = 0; i < _nBirds; i++) {
            let randomSize = randomNumberGenerator(1, 3);
            let spawnRandomizer = randomNumberGenerator(0, 1);
            let randomPositionX = randomNumberGenerator(0, BeachClasses.canvas.width);
            let randomPositionY = randomNumberGenerator(0, BeachClasses.canvas.height);
            let fixedPosition = 0;
            let position;
            if (spawnRandomizer == 0) {
                position = new BeachClasses.Vector(fixedPosition, randomPositionX);
            }
            else {
                position = new BeachClasses.Vector(randomPositionY, fixedPosition);
            }
            let bird = new BeachClasses.Bird(randomSize, position);
            birds.push(bird);
        }
    }
    function createClouds(_firstCloudY, _secondCloudY) {
        console.log("create Clouds");
        let positionFirst = new BeachClasses.Vector(-30, _firstCloudY);
        let velocityFirst = new BeachClasses.Vector(10, 0);
        let positionSecond = new BeachClasses.Vector(1000, _secondCloudY);
        let velocitySecond = new BeachClasses.Vector(-10, 0);
        let cloud1 = new BeachClasses.Cloud(positionFirst, velocityFirst);
        let cloud2 = new BeachClasses.Cloud(positionSecond, velocitySecond);
        clouds.push(cloud1, cloud2);
        console.log(clouds);
    }
    function randomNumberGenerator(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min) + _min);
        return random;
    }
    function update() {
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
    function paintCanvas() {
        colorBackground();
        drawSun();
        drawBeach();
        let elementsPosition = new BeachClasses.Vector(710, 185);
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
        let sky = BeachClasses.crc2.createLinearGradient(0, 0, 0, 800);
        sky.addColorStop(0, "#8565C4");
        sky.addColorStop(0.15, "#FFB6C1");
        sky.addColorStop(0.3, "#ff781f");
        BeachClasses.crc2.fillStyle = sky;
        BeachClasses.crc2.fillRect(0, 0, BeachClasses.canvas.width, BeachClasses.canvas.height);
        let ocean = BeachClasses.crc2.createLinearGradient(0, 0, 0, 700);
        ocean.addColorStop(0.28, "white");
        ocean.addColorStop(0.38, "#ff781f");
        ocean.addColorStop(0.5, "HSL(240, 50%, 45%)");
        ocean.addColorStop(0.8, "#4C125E");
        BeachClasses.crc2.fillStyle = ocean;
        BeachClasses.crc2.fillRect(0, 250, BeachClasses.canvas.width, 700);
    }
    function drawSun() {
        let r1 = 20;
        let r2 = 80;
        let sunshine = BeachClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        sunshine.addColorStop(0, "HSLA(60 , 96% , 83%, 1)");
        sunshine.addColorStop(1, "HSLA(70 , 96% , 79%, 0)");
        BeachClasses.crc2.save();
        BeachClasses.crc2.translate(170, 170);
        BeachClasses.crc2.fillStyle = sunshine;
        BeachClasses.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        BeachClasses.crc2.fill();
        BeachClasses.crc2.restore();
    }
    function drawBeach() {
        BeachClasses.crc2.save();
        BeachClasses.crc2.translate(400, 250);
        BeachClasses.crc2.save();
        BeachClasses.crc2.beginPath();
        BeachClasses.crc2.moveTo(0, 0);
        BeachClasses.crc2.bezierCurveTo(300, -60, 500, -50, 858, -40);
        BeachClasses.crc2.lineTo(860, 308);
        BeachClasses.crc2.fillStyle = "#C2B280";
        BeachClasses.crc2.fill();
        BeachClasses.crc2.strokeStyle = "#C2B280";
        BeachClasses.crc2.stroke();
        BeachClasses.crc2.restore();
        BeachClasses.crc2.beginPath();
        BeachClasses.crc2.moveTo(0, 0);
        BeachClasses.crc2.bezierCurveTo(80, 100, 300, 100, 450, 330);
        BeachClasses.crc2.lineTo(860, 308);
        BeachClasses.crc2.lineTo(860, 0);
        BeachClasses.crc2.fillStyle = "#C2B280";
        BeachClasses.crc2.fill();
        BeachClasses.crc2.strokeStyle = "RGBA(255, 255, 255, 0.8)";
        BeachClasses.crc2.lineWidth = 7;
        BeachClasses.crc2.lineCap = "round";
        BeachClasses.crc2.stroke();
        BeachClasses.crc2.closePath();
        BeachClasses.crc2.restore();
    }
    function drawPlants(_position) {
        let nStrands = 50;
        let strand = new Path2D();
        BeachClasses.crc2.fillStyle = "#285D34";
        BeachClasses.crc2.lineWidth = 10;
        strand.moveTo(5, 0);
        strand.lineTo(-4, 28);
        strand.lineTo(3, 25);
        strand.moveTo(0, 0);
        strand.ellipse(6, -3, 2, 6, Math.PI / 11, 0, 2 * Math.PI);
        BeachClasses.crc2.save();
        BeachClasses.crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nStrands; drawn++) {
            BeachClasses.crc2.fill(strand);
            BeachClasses.crc2.translate(5, -6);
            BeachClasses.crc2.fill(strand);
            BeachClasses.crc2.translate(10, 3);
            BeachClasses.crc2.fill(strand);
            BeachClasses.crc2.translate(0, -2);
            BeachClasses.crc2.fill(strand);
            BeachClasses.crc2.translate(15, 5);
            BeachClasses.crc2.fill(strand);
            BeachClasses.crc2.translate(20, 0);
        }
        BeachClasses.crc2.restore();
    }
    function drawPeople(_state, _position) {
        if (_state == "swimming") {
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(_position.x, _position.y);
            BeachClasses.crc2.save();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.rotate(-45);
            BeachClasses.crc2.moveTo(0, 0);
            BeachClasses.crc2.lineTo(0, -15);
            BeachClasses.crc2.rotate(45);
            BeachClasses.crc2.restore();
            BeachClasses.crc2.save();
            BeachClasses.crc2.rotate(15);
            BeachClasses.crc2.moveTo(0, 0);
            BeachClasses.crc2.lineTo(-15, 0);
            BeachClasses.crc2.rotate(-15);
            BeachClasses.crc2.restore();
            BeachClasses.crc2.save();
            BeachClasses.crc2.moveTo(0, 0);
            BeachClasses.crc2.lineTo(0, -8);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.restore();
            BeachClasses.crc2.translate(0, -8);
            BeachClasses.crc2.moveTo(5, -4);
            BeachClasses.crc2.arc(0, -4, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.lineWidth = 2;
            BeachClasses.crc2.fillStyle = "black";
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fill();
            BeachClasses.crc2.restore();
        }
        else if (_state == "surfing") {
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(_position.x, _position.y);
            BeachClasses.crc2.save();
            let surfboard = new Path2D();
            surfboard.ellipse(1, 2, 10, 30, Math.PI / 3, 0, 2 * Math.PI);
            BeachClasses.crc2.fillStyle = "#BCE3B9";
            BeachClasses.crc2.fill(surfboard);
            BeachClasses.crc2.restore();
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
            BeachClasses.crc2.lineWidth = 2;
            BeachClasses.crc2.stroke(person);
            BeachClasses.crc2.fillStyle = "black";
            BeachClasses.crc2.fill(person);
            BeachClasses.crc2.restore();
        }
        else if (_state == "sunbathing") {
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(_position.x, _position.y);
            let towel = new Path2D();
            towel.moveTo(-18, -4);
            towel.lineTo(23, -26);
            towel.lineTo(39, -7);
            towel.lineTo(-5, 16);
            BeachClasses.crc2.fillStyle = "#83DCDD";
            BeachClasses.crc2.fill(towel);
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
            BeachClasses.crc2.rotate(45);
            BeachClasses.crc2.lineWidth = 2;
            BeachClasses.crc2.stroke(person);
            BeachClasses.crc2.fillStyle = "black";
            BeachClasses.crc2.fill(person);
            BeachClasses.crc2.restore();
        }
    }
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=beach.js.map