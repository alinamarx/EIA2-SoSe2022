var L02_BlackMailerCompanion;
(function (L02_BlackMailerCompanion) {
    console.log("Start");
    var chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        var x = _event.offsetX;
        var y = _event.offsetY;
        var mail = _event.target;
        var letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        var target = _event.target;
        var parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_BlackMailerCompanion || (L02_BlackMailerCompanion = {}));
//# sourceMappingURL=Blackmailer.js.map