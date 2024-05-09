document.addEventListener("DOMContentLoaded", function () {
    const removeItemDiv = document.querySelector(".removeItem");

    function removedata() {
        removeItemDiv.innerHTML = "";
    }

    function makevisible() {
        removeItemDiv.innerHTML = "<h2>Mouseout Event</h2><p>It automatically occurs when mouse goes away.</p>";
    }

    function changeColor(event) {
        event.target.style.backgroundColor = "#f0f0f0";
    }

    function resetColor(event) {
        event.target.style.backgroundColor = "#ffffff";
    }

    function showCoordinates(event) {
        const x = event.clientX;
        const y = event.clientY;
        const Coordinates = `Mouse coordinates: X ${x}, Y ${y}`;
        document.getElementById("Showcordinates").innerHTML = Coordinates;
        
    }

    function Uppercase(event){
       const namE = document.getElementById("fname");
       namE.value = namE.value.toUpperCase();
    }

    function myfocus(event){
        const namE = document.getElementById("fname");
        namE.style.backgroundColor = "lightyellow";
    }

    const eventItem1 = document.getElementById("event-item1");
    const eventItem2 = document.getElementById("event-item2");
    const eventItem3 = document.getElementById("event-item3");
    const eventItem5 = document.getElementById("fname");

    eventItem1.addEventListener("click", removedata);
    eventItem1.addEventListener("mouseout", makevisible);
    eventItem2.addEventListener("mouseover", changeColor);
    eventItem2.addEventListener("mouseout", resetColor);
    eventItem3.addEventListener("mousemove", showCoordinates);
    eventItem5.addEventListener("input", Uppercase);
    eventItem5.addEventListener("focus", myfocus);

});

function checkcookies(){
    let text = "";
    if(navigator.cookieEnabled == true){
        text = "Cookies are enabled.";
    }
    else{
        text = "Cookies are not enabled.";
    }
    document.getElementById("isCookiesEnabled").innerHTML = text;
}
