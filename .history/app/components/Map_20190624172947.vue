<template>
  


</template>

<style lang="scss" scoped>
  .mp {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #2222BA;
  z-index: 4;
}

.point {
    position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: 'transparent';
  z-index: 4;
  cursor: pointer;
}

.point:hover {
  background-color: yellow;
}

.underground {
  position : absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 2;
  opacity: 0.7;
  background-size: cover;
  background-position: center;
}

.riverside {
  z-index: 3;
  position: absolute;
  width: 100px;
  height: 300px;
  transform: rotate(30deg);
  top: 2%;
  left: 35%;
  background: rgba(255,0,0,0.2)
}

.background {
  width: 100vw;
  height: 100vh;
  background-image: url("https://image.noelshack.com/fichiers/2019/26/1/1561373957-new-york-map.jpg");
  background-size: cover;
  background-position:  center;
}

.cursor {
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  z-index: 2;
}

.text {
  font-family: 'Verdana';
  position: absolute;
  top: 0;
  left: 0;
  width: 450px;
  height: 450px;
  z-index: 2;
}

.hidden {
  opacity: 0;
}

</style>
