const parallax = document.querySelector('.sec1');

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    // parallax.setAttribute("style", "backgroundPositionY:offset*0.7px;");
    parallax.style.backgroundPositionY = offset*0.5+"px";
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);