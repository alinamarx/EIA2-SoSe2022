var Greet;
(function (Greet) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        var input = document.querySelector("input");
        if (!input)
            return;
        console.log(input);
        input.addEventListener("change", hndChange);
        document.addEventListener("greet", hndGreet);
    }
    function hndChange(_event) {
        var _a;
        console.log(_event);
        // test if value == "Hello"
        var customEvent = new CustomEvent("greet", { bubbles: true });
        (_a = _event.target) === null || _a === void 0 ? void 0 : _a.dispatchEvent(customEvent);
    }
    function hndGreet(_event) {
        var target = _event.target;
        console.log("Greeted with", target.value);
    }
})(Greet || (Greet = {}));
//# sourceMappingURL=CostumEvent.js.map