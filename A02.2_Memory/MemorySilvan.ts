window.addEventListener("load", handleLoad);

let seconds: number = 0;
let minutes: number = 0;
let clicked: number = 0;
let toCheck: number[] = [];

function handleLoad(): void {
    createPrompt();
}

function createPrompt(): void {
    let amount: string = prompt("Mit wie vielen Karten möchtest du spielen? Möglich sind 10 bis 50 Karten", "20");
    let cardAmount:  number = parseInt(amount);

    if (cardAmount % 2 == 0 && cardAmount <= 50 && cardAmount >= 10) {
        createCards(cardAmount);
    } else {
        createPrompt();
    }
}

function createCards( _amount: number): void {
    let cards: number [] = [];

    for (let i: number = _amount; i > 0; i--) {
        if (i % 2 == 0) {
            cards.push(i);
            cards.push(i);
        }
    }
    shuffleCards(cards);
}

function shuffleCards(_cards: number[]): void { //statt number -> number []

    for (let i: number = _cards.length; i > 0; i--) {
        let randomNumber: number = Math.floor(Math.random() * _cards.length);
        playCard(_cards, randomNumber);
        _cards.splice(randomNumber, 1);
    }
}

function playCard(_cards: number[], _randomNumber: number): void {

    let card: HTMLDivElement = document.createElement("div");
    card.className = _cards[_randomNumber] + "";
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
    wrapper.appendChild(card);
    console.log(wrapper);

    card.addEventListener("click", clickCard);
    card.setAttribute("hidden", "false");
    card.innerHTML = "" + _cards[_randomNumber];
}

function clickCard(): void {
    this.setAttribute("noninteraction", true);

    if (clicked > 0) {
        let body: HTMLBodyElement = document.querySelector("body");
        body.setAttribute("noninteraction", "true");
    }

    clicked++;
    setTimeout(click, 2000);
    this.setAttribute("hidden", false);
    toCheck.push(this.className);
}

function click(): void {
    if (clicked == 2 ) {
        let checkOne: number = toCheck[0];
        let checkTwo: number = toCheck[1];

        if (checkOne == checkTwo) {
            alert("You found a pair!");
            let elements: HTMLCollectionOf<Element> = document.getElementsByClassName(checkOne + "");
            elements[0].setAttribute("hidden", "deleted");
            elements[1].setAttribute("hidden", "deleted");

            if (document.querySelectorAll("div div").length == document.querySelectorAll("[hidden = 'deleted']").length) {
                alert("You won the game in :" + minutes + " minutes:" + seconds + "");
                location.reload();
            }
        } else {
            let elementsCheckOne: HTMLCollectionOf<Element> = document.getElementsByClassName(checkOne + "");
            let elementsCheckTwo: HTMLCollectionOf<Element> = document.getElementsByClassName(checkTwo + "");

            elementsCheckOne[0].removeAttribute("noninteraction");
            elementsCheckOne[1].removeAttribute("noninteraction");
            elementsCheckTwo[0].removeAttribute("noninteraction");
            elementsCheckTwo[1].removeAttribute("noninteraction");
            elementsCheckOne[0].setAttribute("hidden", "true");
            elementsCheckOne[1].setAttribute("hidden", "true");
            elementsCheckTwo[0].setAttribute("hidden", "true");
            elementsCheckTwo[1].setAttribute("hidden", "true");

        }
        toCheck = [];
        clicked = 0;
    }
    let body: HTMLBodyElement = document.querySelector("body");
    body.setAttribute("noninteraction", "false");
}

function startTimer(): void {
    setInterval(timer, 1000);
}

function timer(): void {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    let timeHTML: HTMLHeadingElement = document.querySelector("#timer");
    timeHTML.innerHTML = minutes + ":" + seconds;
}