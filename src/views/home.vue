<template>
  <div id="main">
    <div id="text">
      <div class="name"></div>
      <div class="boo">©1985 Game</div>
      <p class="explanation">Left: A Right: D<br>Jump: K Fire: J<br>START GAME:H</p>
    </div>
    <div id="notice">
      <div class="world">WORLD<span>0</span></div>
      <div class="life"><span class="s1"></span><span class="s2">×</span><span class="s2">3</span></div>
    </div>
    <div id="over">GAME OVER</div>
  </div>
  <audio autoplay loop>
    <source src="../Sounds/Themes/mp3/Overworld.mp3">
    <source src="../Sounds/Themes/ogg/Overworld.ogg">
  </audio>
  <router-view />
</template>

<script setup>
import { ref,defineComponent } from "vue";
// import * from "@/common/game/base.js"
import Game from "@/common/game/js.js"
import classes from "@/assets/css/index.css";
const home = ref('home');
// console.log(Game.start);
Game.loading();
</script>

<style scoped>


</style>
