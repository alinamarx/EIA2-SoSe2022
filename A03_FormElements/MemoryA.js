"use strict";
var Memory_03;
(function (Memory_03) {
    // Gearbeitet mit Implementation von Silvan (Aufgabe 02.2)
    let allMatches = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10",
        "11", "11", "12", "12", "13", "13", "14", "14", "15", "15", "16", "16", "17", "17", "18", "19", "20", "20", "21", "21", "22", "22",
        "23", "23", "24", "24", "25", "25"];
    let nMatches = [];
    let seconds = 0;
    let minutes = 0;
    let clicked = 0;
    let values = [];
    let divs = [];
    let prog = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let start = document.querySelector("#start");
        start.addEventListener("click", startGame);
        document.querySelector("form")?.addEventListener("change", handleChange);
    }
    function handleChange() {
        //Wenn dieser Code-Schnipsel aktiviert ist, funktioniert auch der Rest nicht
        // let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("#cardsize");
        // let value: string = slider.getAttribute("value")?;
        // let cards: NodeListOf<HTMLDivElement> = document.querySelectorAll(".card");
        // for (let i: number = 0; i < cards.length; i++) {
        //     cards[i].style.width = value + "em";
        //     cards[i].style.height = value + "em"; 
        // }
        let formdata = new FormData(document.forms[0]);
        let colorCounter = 1;
        for (let entry of formdata.entries()) {
            console.log(entry[0], entry[1]);
            if (entry[0] == "Stepper") {
                determineCardAmount(entry[1]);
            }
            else if (entry[0] == "Color") {
                determineColor(entry[1], colorCounter);
                colorCounter++;
                console.log("Color is determined");
            }
            else if (entry[0] == "font") {
                determineFont(entry[1]);
            }
        }
    }
    function determineCardAmount(pairAmount) {
        for (let i = 0; i < pairAmount * 2; i++) {
            nMatches.push(allMatches[0]);
            allMatches.splice(0, 1);
        }
        //console.log(nMatches);
    }
    function determineColor(hex, colorCounter) {
        //console.log(colorCounter);
        if (colorCounter == 1) {
            let background = document.querySelector("body");
            background.style.backgroundColor = hex;
        }
        else if (colorCounter == 2) {
            let cards = document.querySelectorAll(".card");
            console.log(cards);
            //Die Node-List wird als leer ausgegeben, weil die Karten noch nicht generiert wurden. 
            //Wie kann man den Style von Elementen verändern, die es theoretisch noch nicht gibt?
            //Also was für einen Typ sollte cards hier haben?
            cards.forEach(card => {
                card.style.backgroundColor = hex;
            });
        }
        else if (colorCounter == 3) {
            let body = document.querySelector("body");
            body.style.color = hex;
        }
        else {
            colorCounter = 1;
        }
        //console.log(colorCounter);
    }
    function determineFont(font) {
        let body = document.querySelector("body");
        body.style.fontFamily = font;
        console.log("Font determined: " + font);
    }
    function startGame() {
        console.log("start");
        handleChange();
        shuffleArray(nMatches);
        let form = document.querySelector("form");
        form.remove();
        for (let i = 0; i < nMatches.length; i++) {
            let card = document.createElement("div");
            let value = document.createElement("span");
            card.appendChild(value);
            card.className = "card";
            value.className = nMatches[i];
            document.querySelector("#wrapper")?.appendChild(card);
            card.addEventListener("click", turncards);
        }
        startTimer();
        let timer = document.querySelector("#timer");
        timer.style.visibility = "visible";
    }
    function shuffleArray(_array) {
        let toShuffle = nMatches.length, currentShuffle;
        while (toShuffle != 0) {
            currentShuffle = Math.floor(Math.random() * toShuffle);
            toShuffle--;
            [_array[toShuffle], _array[currentShuffle]] = [_array[currentShuffle], _array[toShuffle]];
        }
        return _array;
    }
    function turncards(_event) {
        clicked++;
        console.log("turn");
        this.className = "card active";
        console.log(_event.target);
        let div = _event.target;
        let span = div.firstChild;
        let shownValue = parseInt(span.className);
        if (shownValue > 9) {
            span.innerHTML = span.className;
        }
        else if (shownValue < 10) {
            span.innerHTML = "0" + span.className;
        }
        let value = span.className;
        values.push(value);
        divs.push(this);
        if (clicked == 2) {
            let body = document.querySelector("body");
            body.style.pointerEvents = "none";
            setTimeout(timeOut, 2000);
            function timeOut() {
                if (values[0] == values[1]) {
                    alert("Yey");
                    divs[0].style.visibility = "hidden";
                    divs[1].style.visibility = "hidden";
                    prog++;
                    let progress = document.querySelector("#progress");
                    progress.innerHTML = "Progress: " + prog;
                    values = [];
                    divs = [];
                    clicked = 0;
                    body.style.pointerEvents = "all";
                    if (document.querySelectorAll(".active").length == document.querySelectorAll(".card").length) {
                        alert("You Won in " + minutes + " minutes and " + seconds + " seconds!");
                    }
                }
                else {
                    divs[0].className = "card";
                    divs[1].className = "card";
                    let spanOne = divs[0].firstChild;
                    spanOne.innerHTML = "";
                    let spanTwo = divs[1].firstChild;
                    spanTwo.innerHTML = "";
                    values = [];
                    divs = [];
                    clicked = 0;
                    body.style.pointerEvents = "all";
                }
            }
        }
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        let timer = document.querySelector("#timer");
        if (seconds < 10 && minutes < 10)
            timer.innerHTML = "0" + minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes < 10)
            timer.innerHTML = "0" + minutes + ":" + seconds;
        else if (seconds < 10 && minutes >= 10)
            timer.innerHTML = minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes >= 10)
            timer.innerHTML = minutes + ":" + seconds;
    }
})(Memory_03 || (Memory_03 = {}));
//# sourceMappingURL=MemoryA.js.map