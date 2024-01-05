<script setup>
import { crew } from "../data/navigation.js";
import CrewSlider from "./icons/CrewSlider.vue";
import CrewImg from "./crew/CrewImg.vue";
</script>

<template>
  <div class="body-content mt-16 lg:mt-24">
    <div>
      <h5 class="content-header">
        <span class="opacity-25">02</span>Meet your crew
      </h5>
      <h4 class="mt-12 md:mt-36 uppercase opacity-50 text-center lg:text-left">
        {{ crew[0].position }}
      </h4>
      <h3 class="uppercase text-center lg:text-left">{{ crew[0].name }}</h3>
      <div
        class="text-light-purple max-w-[27.75rem] mt-6 text-center lg:text-left"
      >
        {{ crew[0].description }}
      </div>
      <CrewSlider class="mt-10 md:mt-20 mx-auto lg:ml-0" />
    </div>
    <CrewImg />
  </div>
</template>
