<template>
  <div>
    <div class="war">
      <img src="../assets/img/img3.jpg" alt="">
      <img src="../assets/img/img4.jpg" alt="">
    </div>

    <div class="hidden" style="height : 110vh; width:100vw;"></div>


  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    mounted: function () {

      let images = document.querySelectorAll('.war img')

      let diff =  document.querySelector('.hidden').offsetHeight - document.querySelector('.war').offsetHeight 
      window.addEventListener('scroll', function () {
        console.log(window.scrollY)

        let per = ((window.scrollY / diff) * 100 ) / 8

        images[1].style.transform = 'translate(' + -(per + 50) + '%,-50%) scale(1.5)'
        images[0].style.opacity = '0.5' 
        images[0].style.transform = 'translate(' + -(-per + 50) + '%,-50%) scale(1.5)'

        if (window.scrollY === 0) {
          images[0].style.opacity ='1'
        }

      })

    
    }


  };
</script>