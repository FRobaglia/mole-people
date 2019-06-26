<template>
  <div class="veteran">
    <div class="war">
      <img src="../assets/img/img4.jpg" alt="">
      <img src="../assets/img/img3.jpg" alt="">
    </div>
    <div class="hidden" style="height:100vh; width:100vw;"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    mounted: function () {
      // let veteran = document.querySelector('.veteran');
      // let images = document.querySelectorAll('.war img')
      // let war = document.querySelector('.war')
      // let warTop = veteran.getBoundingClientRect().top + window.scrollY - window.innerHeight;
      // let diff =  document.querySelector('.veteran .hidden').offsetHeight - document.querySelector('.war').offsetHeight;
      // let hidden = document.querySelector('.veteran .hidden');

      // window.addEventListener('scroll', function () {
      //   //console.log(warTop, window.scrollY);
      //   if (window.scrollY > warTop && window.scrollY < warTop + ( innerHeight)) {
      //     console.log(diff)

      //     war.style.position = 'fixed'

      //     let per = ((window.scrollY / diff) * 100 ) / 8
      //     images[1].style.transform = 'translate(' + -(per + 50) + '%,-50%) scale(1.5)'
      //     images[0].style.opacity = '0.5' 
      //     images[0].style.transform = 'translate(' + -(-per + 50) + '%,-50%) scale(1.5)'
      //   } else {

      //     war.style.position = 'relative';
      //     hidden.style.display = 'none';

      //   }
      // })

    
    }


  };
</script>