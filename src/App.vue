<script setup>
import { ref } from "vue";
import { useAppStore } from "./store/app";
import { useScreenWidth } from "./composables/common.js";
import IconLogo from "./components/icons/IconLogo.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import HomeContent from "./components/HomeContent.vue";
import DestinationContent from "./components/DestinationContent.vue";

const main = useAppStore();
const { smallerThanMd } = useScreenWidth();
</script>

<template>
  <div>
    <div :class="{ 'flex items-center justify-between': smallerThanMd }">
      <IconLogo />
      <NavigationMenu />
    </div>
    <div class="body-content">
      <component
        :is="main.activeMenu === '00' ? HomeContent : DestinationContent"
      ></component>
    </div>
  </div>
</template>
