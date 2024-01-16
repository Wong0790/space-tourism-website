<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { addClass, removeClass } from "../composables/common.js";
import NavigationDestination from "./destination/NavigationDestination.vue";
import DestinationImg from "./destination/DestinationImg.vue";
import DestinationInfo from "./destination/DestinationInfo.vue";

onMounted(() => {
  addClass("bg-destination");
});

onUnmounted(() => {
  removeClass("bg-destination");
});
</script>

<template>
  <div>
    <h5 class="content-header">
      <span class="opacity-25">01</span> Pick your destination
    </h5>
    <div class="body-content">
      <DestinationImg />
      <div class="content-width w-fit mt-auto">
        <NavigationDestination />
        <DestinationInfo />
      </div>
    </div>
  </div>
</template>
