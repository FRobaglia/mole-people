<template>
  <div><section class="end__section end__section--horizontal">

      <div class="end__section__inner">

        <!-- debut -->
        <div class="end">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">
          <img src="../assets/img/img2.jpg" alt="">

        </div>

        <!-- fin -->

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
      let images = document.querySelectorAll('.end img')

      // Get all horizontal scroll element
      var horizontals = document.querySelectorAll(".end__section--horizontal");

      // For each horizontal scroll element, apply the effect
      horizontals.forEach(function (horizontal) {
        // Get the inner element
        var inner = horizontal.querySelector(".end__section__inner");

        // When the user scroll and an animation frame is available
        window.addEventListener("scroll", function () {
          window.requestAnimationFrame(function () {
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

              horizontal.classList.add("end__section--isFixed");

              images.forEach((element, index) => {
                console.log(progression * 100)

                if (progression *100 >= index * 10) {
                  element.style.zIndex = index
                  element.style.width = 100 - index * 5 + '%'
                } else {
                  element.style.zIndex = -10
                }
              });

            } else {
              // Don't fix it
              horizontal.classList.remove("end__section--isFixed");


            }

            // If the progression is above 1 that means the
            // section has been completly scrolled
            if (progression >= 1) {
              horizontal.classList.add("end__section--isScrolled");

            } else {
              horizontal.classList.remove("end__section--isScrolled");

            }


          });
        });
      });
    }
  };
</script>














