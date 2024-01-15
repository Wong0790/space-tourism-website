<script setup>
import { useAppStore } from "../../store/app";

const main = useAppStore();
</script>

<template>
  <h2 class="uppercase mt-4 lg:mt-8 text-center lg:text-left">
    {{ main.destination.title }}
  </h2>
  <p class="destination-container">
    {{ main.destination.description }}
  </p>
  <div class="distance-travel-container">
    <div v-for="(item, cont) in main.destination.numbers" :key="cont">
      <div class="subh2 text-light-purple">
        {{ cont === 0 ? "Avg. Distance" : "Est. travel time" }}
      </div>
      <div class="subh1 uppercase mt-3">
        {{ item }}
      </div>
    </div>
  </div>
</template>
