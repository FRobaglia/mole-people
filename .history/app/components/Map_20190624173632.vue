<template>

<div>
  <div class="background"></div>
  <div class="riverside"></div>
  <div class="underground">
    <div class="mp" style="top:40%;left: 40%"></div>
    <div class="mp" style="top: 20%;left: 40%"></div>
  </div>
  <div class="points">
    <div class="point brooklyn" style="top:40%;left: 40%"></div>
    <div class="point" style="top: 20%;left: 40%"></div>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="hidden text">
    <title>Riverside Park</title>
    <defs>
    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" class="circle" fill="black">
    <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
    </path>
    </defs>
    <text dy="70" textLength="1220" fill="white" letter-spacing="10">
      <textPath xlink:href="#textcircle">Riverside Park</textPath>
    </text>
  </svg>
</div>


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

<script>
var cursor = document.querySelector('.cursor');
var text = document.querySelector('.text');
var clientX = -100;
var clientY= -100;
var riverside = document.querySelector('.riverside');
var underground = document.querySelector('.underground')

riverside.addEventListener("mouseenter", function() {
  text.classList.remove('hidden')
});
riverside.addEventListener("mouseleave", function() {
  text.classList.add('hidden')
});

document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
});

var points = document.querySelectorAll('.point');

points.forEach((element) => {
  element.addEventListener("mouseenter", function() {
    text.classList.remove('hidden');
    card(element.classList);
  });
})



//mps.querySelector('.brooklyn').addEventListener("mouseenter", function() {
  //console.log('hello')
//});

var loop = function() {
  
  underground.style.clipPath =  `circle(100px at ${clientX}px ${clientY}px)`;
  text.style.transform = `translate(${clientX-225}px, ${clientY-225}px)`;
  
  requestAnimationFrame(loop);
}

loop();


export default {
  methods: {
    
  }
}
</script>

