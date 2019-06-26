<template>
  <div>
    <div class="molesText">
      <div class="molesText__content">
        <p></p>
      </div>
    </div>
    <section class="section section--horizontal">
      <div class="section__inner">
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
    var horizontals = document.querySelectorAll(".section--horizontal");
    var text = document.querySelector(".molesText__content p");

    let firstHorizontalSection = document.querySelectorAll('.section--horizontal')[0];
    let secondHorizontalSection = document.querySelectorAll('.section--horizontal')[1];

    let firstTexts = {
      one: '11111',
      two: '22222',
      three: '33333',
    }

    let secondTexts = {
      one: '111111111111111',
      two: '22222222222222222222',
      three: '3333333333333333333333333',
    }

    makeHorizontal(firstHorizontalSection, firstTexts)
    makeHorizontal(secondHorizontalSection, secondTexts)

    function makeHorizontal(horizontal, texts) {
      var inner = horizontal.querySelector(".section__inner");
      window.addEventListener("scroll", function() {
        window.requestAnimationFrame(function() {

          if (!document.querySelector('.section--isFixed')) {
            text.innerHTML = ''
          }
          var toGo = horizontal.offsetHeight - window.innerHeight;
          var position = window.scrollY - horizontal.offsetTop;

          var progression = position / toGo;

          if (progression > 0 && progression < 1) {
            horizontal.classList.add("section--isFixed");
      
            if (progression < 0.25) {
              text.innerHTML = texts.one;
            } else if (progression < 0.7) {
              text.innerHTML = texts.two;
            } else if (progression < 0.9) {
              text.innerHTML = texts.three;
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
    };

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