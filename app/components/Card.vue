<template>
  <article class="card" >
    <div :style="{backgroundImage: `url(${profile.cardImage})`}" v-if="profile">
    <h2> {{ profile.name }} </h2>
    <p> {{ profile.cardContent }} </p>
    </div>
  </article>
</template>

<style lang='scss'>

  @keyframes fromLeft {
    from {
      opacity: 0;
      transform: translateX(20vw);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  .card {
    display: none;
    position: absolute;
    right: 15%;
    top: calc(50% - 40vh);
    animation: fromLeft .5s ease-in-out;
    background-size: cover;
    background-position: center;
    flex-flow: column wrap;
    justify-content: flex-end;
    border: 5px solid white;
    width: 21%;
    height: 75%;
    background-color: black;
    color: white;
    margin: 30px;

    div {
      padding: 10px;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;
    }

    &.is-shown {
      display: flex;
    }

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
      font-size: 1.1vw;
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
    }
  },
  props: ["profile"],
};

</script>