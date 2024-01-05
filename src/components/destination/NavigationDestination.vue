<script setup>
import { useAppStore } from "../../store/app";
import { destinations } from "../../data/navigation.js";

const main = useAppStore();
</script>

<template>
  <nav class="navigation-destination nav-text">
    <a
      :class="{
        'nav-active': destination.title === main.destinationMenu,
      }"
      v-for="(destination, cont) in destinations"
      :key="cont"
      @click="main.updateDestination(destination.title)"
      >{{ destination.title }}</a
    >
  </nav>
</template>
