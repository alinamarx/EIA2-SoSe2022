var EventInspector;
(function (EventInspector) {
    //When the window has loaded, EventListeners are installed
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var body = document.querySelector("body");
        var div0 = document.getElementById("div0");
        var div1 = document.getElementById("div1");
        var button = document.querySelector("button");
        //Mousemove-Listener on document
        document.addEventListener("mousemove", setInfoBox);
        //Click- and keyup-Listener for each document, body and divs
        document.addEventListener("click", logInfo);
        document.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        body.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        //Bonus: Click-Listener for Button
        button.addEventListener("click", handleClick);
        document.addEventListener("target", handleTarget);
    }
    function setInfoBox(_event) {
        //X- and Y-coordinates of the mouse
        var mousex = _event.clientX;
        var mousey = _event.clientY;
        //creating span with information
        var span = document.querySelector("span");
        span.innerHTML = "Mouse position: <br>X-Coordinate = " + mousex + "<br>Y-Coordinate = " + mousey + "<br><br>Event-Target = " + _event.target;
        //placing span at position of mouse
        span.style.position = "fixed";
        span.style.top = mousey + 10 + "px";
        span.style.left = mousex + 10 + "px";
    }
    function logInfo(_event) {
        console.log(_event.type, _event.target, _event.currentTarget, _event);
    }
    function handleClick(_event) {
        var _a;
        var customEvent = new CustomEvent("target", { bubbles: true });
        (_a = _event.target) === null || _a === void 0 ? void 0 : _a.dispatchEvent(customEvent);
    }
    function handleTarget(_event) {
        alert(_event.composedPath());
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=Event.js.map