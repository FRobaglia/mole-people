<template>
  <article class="card">
    <h2> {{ profile.name }} </h2>
    <p> {{ profile.card.content }} </p>
  </article>
</template>

<style lang='scss'>

  @keyframes fromLeft {
    from {
      opacity: 0;
      transform: translateX(-20vw);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  .card {
    animation: fromLeft .5s ease-in-out;
    background-size: cover;
    background-position: center;
    background-image: url('../assets/img/card1.jpg');
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    border: 5px solid white;
    width: 265px;
    height: 400px;
    background-color: black;
    color: white;
    margin: 30px;
    padding: 10px;

    h2 {
      margin-bottom: 40px;
      text-transform: uppercase;
      font-size: 32px;
      text-align: center;
      top: 40%;
    }

    & h2, & p {
      font-weight: bold;
    }

    p {
      line-height: 135%;
      margin-bottom: 8px;
      text-align: left;
    }
  }
</style>

<script>

export default {
  data() {
    return {
      profile: {
        name: "Jeanette",
        card: {
          content: " Ils ont enlevé les bancs publics pour qu'on ne dorme pas dessus. Où voulez-vous qu'ils dorment, les sans-abri, s'ils ne descendent pas dans les tunnels ? "
        }
      }
    }
  }
};

</script>