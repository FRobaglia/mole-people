<template>
  <div>
    <section class="section section--horizontal">
      <div class="section__inner">
        <div class="molesText">
          <div class="molesText__content">
            <p>"Avec toutes les habitations du bas, on a une vraie cité.”</p>
          </div>
        </div>
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
      <div class="section__inner">
        <div class="moles">
          <div class="moles__img moles__img--2"></div>
          <div class="textHidder"></div>
          <div class="moles__img moles__img--2"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // Get all horizontal scroll element
    var horizontals = document.querySelectorAll(".section--horizontal");

    // For each horizontal scroll element, apply the effect
    horizontals.forEach(function(horizontal) {
      // Get the inner element
      var inner = horizontal.querySelector(".section__inner");

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

          // If progression is between 0 & 1 that means we are viewing
          // the section so fix it
          if (progression > 0 && progression < 1) {
            horizontal.classList.add("section--isFixed");
          } else {
            // Don't fix it
            horizontal.classList.remove("section--isFixed");
          }

          // If the progression is above 1 that means the
          // section has been completly scrolled
          if (progression >= 1) {
            horizontal.classList.add("section--isScrolled");
          } else {
            horizontal.classList.remove("section--isScrolled");
          }

          // Set the translation for the element
          setTranslateX(inner, progression);
        });
      });
    });

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
  }
};
</script>