"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        paintCanvas();
    }
    function paintCanvas() {
        colorBackground();
        drawSun();
        drawClouds({ x: 480, y: 140 });
        drawClouds({ x: 1050, y: 50 });
        drawBeach();
        drawPlants({ x: 1000, y: 200 });
        drawPlants({ x: 910, y: 230 });
        drawPlants({ x: 1300, y: 270 });
        drawPeople("swimming", { x: 150, y: 280 });
        drawPeople("swimming", { x: 210, y: 265 });
        drawPeople("swimming", { x: 500, y: 500 });
        drawPeople("swimming", { x: 460, y: 430 });
        drawPeople("surfing", { x: 120, y: 480 });
        drawPeople("surfing", { x: 200, y: 380 });
        drawPeople("sunbathing", { x: 920, y: 410 });
        drawPeople("sunbathing", { x: 960, y: 440 });
        drawBirds();
    }
    function colorBackground() {
        let sky = crc2.createLinearGradient(0, 0, 0, 800);
        sky.addColorStop(0, "#8565C4");
        sky.addColorStop(0.15, "#FFB6C1");
        sky.addColorStop(0.3, "#ff781f");
        crc2.fillStyle = sky;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        let ocean = crc2.createLinearGradient(0, 0, 0, 700);
        ocean.addColorStop(0.28, "white");
        ocean.addColorStop(0.38, "#ff781f");
        ocean.addColorStop(0.5, "HSL(240, 50%, 45%)");
        ocean.addColorStop(0.8, "#4C125E");
        crc2.fillStyle = ocean;
        crc2.fillRect(0, 250, canvas.width, 700);
    }
    function drawSun() {
        let r1 = 20;
        let r2 = 80;
        let sunshine = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        sunshine.addColorStop(0, "HSLA(60 , 96% , 83%, 1)");
        sunshine.addColorStop(1, "HSLA(70 , 96% , 79%, 0)");
        crc2.save();
        crc2.translate(170, 170);
        crc2.fillStyle = sunshine;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawClouds(_position) {
        let nParticles = 25;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradientCloud = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0.2, "HSLA(0, 100%, 100%, 1)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientCloud;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * 325;
            let y = (Math.random() - 0.5) * 80;
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawBeach() {
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
    function drawPlants(_position) {
        let nStrands = 70;
        let strand = new Path2D();
        crc2.fillStyle = "#285D34";
        crc2.lineWidth = 10;
        strand.moveTo(5, 0);
        strand.lineTo(-4, 28);
        strand.lineTo(3, 25);
        strand.moveTo(0, 0);
        strand.ellipse(6, -3, 2, 6, Math.PI / 11, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nStrands; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * 750;
            let y = (Math.random() - 0.5) * 35;
            crc2.translate(x, y);
            crc2.fill(strand);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawPeople(state, _position) {
        if (state == "swimming") {
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
        }
        else if (state == "surfing") {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.save();
            let surfboard = new Path2D();
            surfboard.ellipse(1, 2, 10, 30, Math.PI / 3, 0, 2 * Math.PI);
            crc2.fillStyle = "#BCE3B9";
            crc2.fill(surfboard);
            crc2.restore();
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
            crc2.lineWidth = 2;
            crc2.stroke(person);
            crc2.fillStyle = "black";
            crc2.fill(person);
            crc2.restore();
        }
        else if (state == "sunbathing") {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            let towel = new Path2D();
            towel.moveTo(-18, -4);
            towel.lineTo(23, -26);
            towel.lineTo(39, -7);
            towel.lineTo(-5, 16);
            crc2.fillStyle = "#83DCDD";
            crc2.fill(towel);
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
            crc2.rotate(45);
            crc2.lineWidth = 2;
            crc2.stroke(person);
            crc2.fillStyle = "black";
            crc2.fill(person);
            crc2.restore();
        }
    }
    function drawBirds() {
        crc2.save();
        crc2.translate(canvas.width / 2, 100);
        let nBirds = 8;
        let bird = new Path2D;
        bird.moveTo(0, 0);
        bird.lineTo(-10, -10);
        bird.lineTo(-20, 0);
        bird.moveTo(0, 0);
        bird.lineTo(10, -10);
        bird.lineTo(20, 3);
        crc2.lineWidth = 4;
        crc2.lineCap = "round";
        crc2.lineJoin = "round";
        for (let drawn = 0; drawn < nBirds; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * canvas.width;
            let y = (Math.random() - 0.5) * canvas.height / 2;
            crc2.translate(x, y);
            crc2.stroke(bird);
            crc2.restore();
        }
        crc2.restore();
    }
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=beach.js.map