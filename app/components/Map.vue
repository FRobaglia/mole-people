<template>

<div>
  <section>

  </section>
  <div class="background"></div>
  <div class="zone riverside"></div>
  <div class="zone grandCentral"></div>
  <div class="zone pennStation"></div>
  <div class="underground">
    <div class="mp" style="top:40%;left: 40%"></div>
    <div class="mp" style="top: 20%;left: 45%"></div>
    <div class="mp" style="top: 42%;left: 49%"></div>
  </div>
  <div class="points">
    <div class="point brooklyn" style="top:40%;left: 40%"></div>
    <div class="point" style="top: 20%;left: 45%"></div>
    <div class="point" style="top: 42%;left: 49%"></div>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="hidden text river">
    <defs>
    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" class="circle" fill="black">
    <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
    </path>
    </defs>
    <text dy="70" textLength="1220" fill="white" letter-spacing="10">
      <textPath xlink:href="#textcircle">Riverside Park</textPath>
    </text>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="hidden text grand">
    <defs>
    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" class="circle" fill="black">
    <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
    </path>
    </defs>
    <text dy="70" textLength="1220" fill="white" letter-spacing="10">
      <textPath xlink:href="#textcircle">Grand Central Terminal</textPath>
    </text>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" class="hidden text penn">
    <defs>
    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" class="circle" fill="black">
    <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
    </path>
    </defs>
    <text dy="70" textLength="1220" fill="white" letter-spacing="10">
      <textPath xlink:href="#textcircle">Pennsylvania Station</textPath>
    </text>
  </svg>
  <Card></Card>
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
  transform: scale(1);
  transition: all 0.2s ease;
}

.point:hover {
  transform: scale(2);
  background-color: #2222BA;
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

.zone {
  z-index: 3;
  position: absolute;
  border: solid rgba(34,34,186,0.5) 2px;
  border-radius: 5px;
  background: rgba(34,34,186,0.1);
}

.riverside {
  top: 2%;
  left: 42%;
  width: 80px;
  height: 400px;
  transform: rotate(30deg);
}
.grandCentral {
  top: 35%;
  left: 46%;
  width: 100px;
  height: 100px;
  transform: rotate(30deg);
}

.pennStation  {
  top: 55%;
  left: 40%;
  width: 120px;
  height: 140px;
  transform: rotate(30deg);
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
import Card from './Card';


export default {

  mounted() {    
    var cursor = document.querySelector('.cursor');
    var river = document.querySelector('.river');
    var grand = document.querySelector('.grand');
    var penn = document.querySelector('.penn');
    var clientX = -100;
    var clientY= -100;
    var riversideZone = document.querySelector('.zone.riverside');
    var grandZone  =document.querySelector('.zone.grandCentral');
    var pennZone = document.querySelector('.zone.pennStation')
    var underground = document.querySelector('.underground')

    var checker = true;

    riversideZone.addEventListener("mouseenter", function() {
      river.classList.remove('hidden')
    });
    riversideZone.addEventListener("mouseleave", function() {
      setTimeout(() => {
        if (checker) {
          river.classList.add('hidden')
        }
      }, 10);

    });

    grandZone.addEventListener("mouseenter", function() {
      grand.classList.remove('hidden')
    });
    grandZone.addEventListener("mouseleave", function() {
      setTimeout(() => {
        if (checker) {
          grand.classList.add('hidden')
        }
      }, 10);
    });

    pennZone.addEventListener("mouseenter", function() {
      penn.classList.remove('hidden')
    });
    pennZone.addEventListener("mouseleave", function() {
      setTimeout(() => {
        if (checker) {
          penn.classList.add('hidden')
        }
      }, 10);
    });

    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    var points = document.querySelectorAll('.point');
    points.forEach((element) => {
      element.addEventListener("mouseenter", function() {
        checker = false;
      });
      element.addEventListener("mouseleave", function() {
        checker = true;
      });
    })



    //mps.querySelector('.brooklyn').addEventListener("mouseenter", function() {
      //console.log('hello')
    //});

    var loop = function() {
      
      underground.style.clipPath =  `circle(100px at ${clientX}px ${clientY}px)`;
      river.style.transform = `translate(${clientX-225}px, ${clientY-225}px)`;
      grand.style.transform = `translate(${clientX-225}px, ${clientY-225}px)`;
      penn.style.transform = `translate(${clientX-225}px, ${clientY-225}px)`;
      
      requestAnimationFrame(loop);
    }

    loop();
  },
  components: {
    Card
  }
}
</script>

