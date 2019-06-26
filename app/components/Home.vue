<template>
  <div>
    <div class="video">
      <video src="../assets/video/videoIntro.mp4" autoplay muted></video>
      <h1>fuck le 17 izi bang bang</h1>
    </div>
    <div class="zoom"></div>
    <div style="height: 100vh; z-index: 10; background: rgba(0,0,0,0);">
      <div class="zoom__desc">
        <h1>Riverside</h1>
        <h2>NEW YORK</h2>
        <p
          class="zoom__content"
        >" lls ont enlevé les bancs publics pour qu'on ne dorme pas dessus. Où voulez-vous qu'ils dorment, les sans-abri, s'ils ne descendent pas dans les tunnels ? "</p>
      </div>
    </div>
    <div style="height: 100vh; z-index: 10; background: rgba(0,0,0,0); position: relative;">
      <div class="zoom__final">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eos dicta impedit
          repellendus animi, voluptatum exercitationem illum, tenetur debitis iste, assumenda minima neque iure fuga
          quaerat voluptatibus atque. Excepturi, odit.Accusamus tenetur aliquid ipsum aut magnam itaque? Nulla quam
          facilis id consequuntur aspernatur laborum, nihil ducimus officia eaque debitis eligendi sequi ipsum. Fugit in
          impedit velit omnis nobis, autem possimus?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {
    let zoom = document.querySelector(".zoom");
    let scroll;
    let per;
    let zoomTop = zoom.getBoundingClientRect().top + window.scrollY;

    window.addEventListener("scroll", function() {
      scroll = window.scrollY - zoomTop;
      per = (scroll / zoomTop) * 100;

      console.log(window.scrollY);

      if (
        window.scrollY > zoomTop &&
        window.scrollY < zoomTop + zoom.offsetHeight * 2
      ) {
        zoom.classList.add("zoom--isFixed");
        zoom.style.backgroundSize = per * 8 + window.innerWidth + "px";
      } else {
        zoom.classList.remove("zoom--isFixed");
      }

      if (window.scrollY >= 1440) {
        console.log("e");
      }
    });
  }
};
</script>