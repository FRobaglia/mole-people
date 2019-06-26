<template>
  <div>
    <section class="section section--horizontal">
      <div class="section__inner section__inner--1">
        <div class="moles">
          <div class="moles__img moles__img--1"></div>
          <div class="textHidder">
            <div class="textHidder"></div>
          </div>
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
    // Get all horizontal scroll element
    var horizontals = document.querySelectorAll(".section--horizontal");
    var text = document.querySelector(".molesText__content");

    // makeHorizontal(section, text)

    horizontals.forEach(function(horizontal) {
      var inner = horizontal.querySelector(".section__inner");
      var secondinner = horizontal.querySelector(".section__secondinner");

      window.addEventListener("scroll", function() {
        window.requestAnimationFrame(function() {
          var toGo = horizontal.offsetHeight - window.innerHeight;
          var position = window.scrollY - horizontal.offsetTop;
          var progression = position / toGo;
          console.log(progression);
          var textContent = document.querySelector(".molesText__content > p");

          if (progression > 0 && progression < 1) {
            horizontal.classList.add("section--isFixed");
            textContent.innerHTML = "";
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
            horizontal.classList.remove("section--isFixed");
          }

          if (progression >= 1) {
            horizontal.classList.add("section--isScrolled");
          } else {
            horizontal.classList.remove("section--isScrolled");
          }

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