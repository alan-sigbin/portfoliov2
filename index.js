const parallax = document.querySelector('.sec1');

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    // parallax.setAttribute("style", "backgroundPositionY:offset*0.7px;");
    parallax.style.backgroundPositionY = offset*0.5+"px";
});

