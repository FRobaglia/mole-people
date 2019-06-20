<template>
  <li @mouseover="hover()">
    <h2> {{ people.name }} </h2>
    <h3> {{ people.age }} </h3>
  </li>
</template>


<style lang='scss' scoped>
  h2,h3 {
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    color: white;
    font-weight: bold;
  }
  li:nth-child(odd) {
    background-color: grey;
  }
  li:nth-child(even) {
    background-color: black;
  } 
  h2 {
    bottom: 26%;
    font-size: 40px;
  }
  h3 {
    bottom: 20%;
    font-size: 32px;
  }
  li {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 25vw;

    &:hover {
      background-color: orange;
    }
  }

</style>


<script>

export default {
  props: ["people"],
  methods: {
    hover() {
    }
  }
};

</script>