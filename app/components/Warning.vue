<template>
  <div class="whole-page">
    <img src="../assets/img/headset.svg" alt="headset">
    <p> Pour assurer la meilleure immersion possible, il est conseillé de vous équiper d’un casque audio avant de débuter le web-documentaire. </p>
    <br>
    <p class="big"> Bon visionnage ! </p>

    <router-link class="start-doc" to="/home"> Débuter </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .whole-page {
    padding-top: 50px;
    width: 100vw;
    height: 100vh;
    background: #080B22 !important; 
    
    .big {
      font-size: 38px;
      font-weight: bold;
    }

    .start-doc {
      transition: transform .2s;
      display: block;
      padding: 12px;
      width: 10%;
      text-align: center;
      text-decoration: none;
      margin: 0 auto;
      margin-top: 50px;
      color: black;
      border-radius: 4px;
      background: white;

      &:hover {
        transform: scale(0.9) translateY(4px);
      }
    }
    p {
      font-size: 21px;
      font-weight: normal;
      text-align: center;
    }

    img {
      width: 15vw;
      margin: 0 auto;
      margin-bottom: 50px;
      display: block;
      filter: invert(100%);
    }
  }
</style>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
