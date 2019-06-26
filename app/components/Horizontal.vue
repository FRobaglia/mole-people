<template>
  <div>
    <section class="section section--horizontal">
      <div class="section__inner section__inner--1">
        <div class="moles">
          <div class="moles__img moles__img--1"></div>
          <div class="textHidder"></div>
          <div class="moles__img moles__img--1"></div>
          <div class="textHidder"></div>
          <div class="moles__img moles__img--1"></div>
        </div>
      </div>
    </section>

    <section class="section section__vertical">
      <div class="section__vertical--text">
        <h3>1993</h3>
        <h2>Rudy Giuliani</h2>
        <p>Élu maire de New York, il met en place un programme de “nettoyage de la ville”. les souterrains de new york connaissent un grand nombre de descentent policières</p>
      </div>
    </section>

    <section class="section section--horizontal">
      <div class="section__inner section__inner--2">
        <div class="moles">
          <div class="moles__img moles__img--2"></div>
          <div class="textHidder"></div>
          <div class="moles__img moles__img--2"></div>
        </div>
      </div>
    </section>
    <div class="molesText">
      <div class="molesText__content">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // var hidder = document.querySelector(".textHidder");
    // var textContent = document.querySelector(".molesText__content");
    // console.log(hidder);
    // var hidderPosition = {
    //   right: hidder.top + window.pageXOffset
    // };
    // var textPosition = {
    //   right: hidder.left + window.pageXOffset
    // };
    // console.log(hidderPosition);
    // console.log(textPosition);

    // if (hidderPosition === textPosition) {
    //   textContent.innerHTML = "New text!";
    // }

    // Get all horizontal scroll element
    var horizontals = document.querySelectorAll(".section--horizontal");
    var text = document.querySelector(".molesText__content");

    // For each horizontal scroll element, apply the effect
    horizontals.forEach(function(horizontal) {
      // Get the inner element
      var inner = horizontal.querySelector(".section__inner");
      var secondinner = horizontal.querySelector(".section__secondinner");
      // When the user scroll and an animation frame is available
      window.addEventListener("scroll", function() {
        window.requestAnimationFrame(function() {
          // The distance to scroll inside the horizontal element
          // is its height - the window's height
          var toGo = horizontal.offsetHeight - window.innerHeight;

          // The scroll position inside the element
          // is the scroll position - the element's distance from the top
          var position = window.scrollY - horizontal.offsetTop;

          // The progression between 0 & 1 is the scroll position
          // inside the element divided by the distance to scroll
          var progression = position / toGo;
          console.log(progression);
          var textContent = document.querySelector(".molesText__content > p");
          // If progression is between 0 & 1 that means we are viewing
          // the section so fix it
          if (progression > 0 && progression < 1) {
            horizontal.classList.add("section--isFixed");

            var textContent = document.querySelector(".molesText__content > p");
            console.log(textContent);
            console.log(progression);

            if (progression < 0.25) {
              textContent.innerHTML =
                "Avec toutes les habitations du bas, on a une vraie cité.";
            } else if (progression < 0.7) {
              textContent.innerHTML =
                "environ 5000 'hommes-taupes'dans les années 90";
            } else if (progression < 0.9) {
              textContent.innerHTML =
                "“En haut, c'est chacun pour soi. Le tunnel, c'est une grande famille”";
            }
          } else {
            // Don't fix it
            horizontal.classList.remove("section--isFixed");
          }

          // If the progression is above 1 that means the
          // section has been completly scrolled
          if (progression >= 1) {
            horizontal.classList.add("section--isScrolled");
            if (progression < 1.3) {
              textContent.innerHTML = "";
            }
          } else {
            horizontal.classList.remove("section--isScrolled");
          }

          // Set the translation for the element
          setTranslateX(inner, progression);
        });
      });
    });

    var textHidder = document.querySelector(".textHidder");

    text.style.zIndex = "1";
    textHidder.style.zIndex = "80";

    function setTranslateX(element, progression) {
      // Limit the progression factor between 0 & 1
      if (progression > 1) {
        progression = 1;
      } else if (progression < 0) {
        progression = 0;
      }

      // The size to move is the element width minus the window width
      var toMove = element.offsetWidth - window.innerWidth;

      // The transform factor is the size to move multiplied by the progression
      var transform = -1 * toMove * progression + "px";
      element.style.transform = "translateX(" + transform + ")";
    }
    var textContent = document.querySelector(".molesText__content");
  }
};
</script>