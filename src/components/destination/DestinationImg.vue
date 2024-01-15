<script setup>
import { computed } from "vue";
import { useAppStore } from "../../store/app";
import { loadImg } from "../../composables/common.js";

const main = useAppStore();
const imgName = computed(() => `${main.destinationMenu}.png`);
</script>

<template>
  <div class="content-width">
    <div class="flex justify-center mt-12 lg:mt-32">
      <img :src="loadImg('destination', imgName)" />
    </div>
  </div>
</template>
