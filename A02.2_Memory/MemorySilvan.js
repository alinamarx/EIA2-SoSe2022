window.addEventListener("load", handleLoad);
var seconds = 0;
var minutes = 0;
var clicked = 0;
var toCheck = [];
function handleLoad() {
    createPrompt();
}
function createPrompt() {
    var amount = prompt("Mit wie vielen Karten möchtest du spielen? Möglich sind 10 bis 50 Karten", "20");
    var cardAmount = parseInt(amount);
    if (cardAmount % 2 == 0 && cardAmount <= 50 && cardAmount >= 10) {
        createCards(cardAmount);
    }
    else {
        createPrompt();
    }
}
function createCards(_amount) {
    var cards = [];
    for (var i = _amount; i > 0; i--) {
        if (i % 2 == 0) {
            cards.push(i);
            cards.push(i);
        }
    }
    shuffleCards(cards);
}
function shuffleCards(_cards) {
    for (var i = _cards.length; i > 0; i--) {
        var randomNumber = Math.floor(Math.random() * _cards.length);
        playCard(_cards, randomNumber);
        _cards.splice(randomNumber, 1);
    }
}
function playCard(_cards, _randomNumber) {
    var card = document.createElement("div");
    card.className = _cards[_randomNumber] + "";
    var wrapper = document.getElementById("wrapper");
    wrapper.appendChild(card);
    console.log(wrapper);
    card.addEventListener("click", clickCard);
    card.setAttribute("hidden", "false");
    card.innerHTML = "" + _cards[_randomNumber];
}
function clickCard() {
    this.setAttribute("noninteraction", true);
    if (clicked > 0) {
        var body = document.querySelector("body");
        body.setAttribute("noninteraction", "true");
    }
    clicked++;
    setTimeout(click, 2000);
    this.setAttribute("hidden", false);
    toCheck.push(this.className);
}
function click() {
    if (clicked == 2) {
        var checkOne = toCheck[0];
        var checkTwo = toCheck[1];
        if (checkOne == checkTwo) {
            alert("You found a pair!");
            var elements = document.getElementsByClassName(checkOne + "");
            elements[0].setAttribute("hidden", "deleted");
            elements[1].setAttribute("hidden", "deleted");
            if (document.querySelectorAll("div div").length == document.querySelectorAll("[hidden = 'deleted']").length) {
                alert("You won the game in :" + minutes + " minutes:" + seconds + "");
                location.reload();
            }
        }
        else {
            var elementsCheckOne = document.getElementsByClassName(checkOne + "");
            var elementsCheckTwo = document.getElementsByClassName(checkTwo + "");
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
    var body = document.querySelector("body");
    body.setAttribute("noninteraction", "false");
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
    var timeHTML = document.querySelector("#timer");
    timeHTML.innerHTML = minutes + ":" + seconds;
}
//# sourceMappingURL=MemorySilvan.js.map