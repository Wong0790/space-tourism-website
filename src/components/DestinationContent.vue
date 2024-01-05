<script setup>
import NavigationDestination from "./destination/NavigationDestination.vue";
import DestinationImg from "./destination/DestinationImg.vue";
import DestinationInfo from "./destination/DestinationInfo.vue";
</script>

<template>
  <div class="body-content mt-16 lg:mt-24">
    <DestinationImg />
    <div class="content-width w-fit mt-auto">
      <NavigationDestination />
      <DestinationInfo />
    </div>
  </div>
</template>
