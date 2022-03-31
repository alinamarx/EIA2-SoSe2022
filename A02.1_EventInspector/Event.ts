namespace EventInspector {

    //When the window has loaded, EventListeners are installed
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        let body: HTMLElement = document.querySelector("body");
        let div0: HTMLElement = document.getElementById("div0");
        let div1: HTMLElement = document.getElementById("div1");
        let button: HTMLElement = document.getElementById("button");

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
    }

    function setInfoBox(_event: MouseEvent): void {
        //X- and Y-coordinates of the mouse
        let mousex: number = _event.clientX;
        let mousey: number = _event.clientY;

        //creating span with information
        let span: HTMLSpanElement = document.querySelector("span");
        span.innerHTML = "Mouse position: <br>X-Coordinate = " + mousex + "<br>Y-Coordinate = " + mousey + "<br><br>Event-Target = " + _event.target;

        //placing span at position of mouse
        span.style.position = "fixed";
        span.style.top =  mousey + 10 + "px";
        span.style.left = mousex + 10 + "px";

    }

    function logInfo(_event: Event): void {
        console.log(_event.type, _event.target, _event.currentTarget, _event);
    }
}