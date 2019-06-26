<template>
  <div>
    <section class="section section--horizontal">
      <div class="section__inner">
        <div class="products">
          <div class="products__product">Photo 1</div>
          <div class="products__product">Photo 2</div>
          <div class="products__product">Photo 3</div>
        </div>
      </div>
    </section>

    <section class="section"></section>

    <section class="section section--horizontal">
      <div class="section__inner">
        <div class="products">
          <div class="products__product">Photo 1</div>
          <div class="products__product">TEXT</div>
          <div class="products__product">Photo 3</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
console.log("ok");
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
import data from "../data.js";
import Navigation from "./Navigation.vue";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    doHorizontal() {}
  },
  components: {
    Navigation
  }
};
</script>
