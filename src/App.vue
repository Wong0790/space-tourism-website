<script setup>
import { useAppStore } from "./store/app";
import { useScreenWidth } from "./composables/common.js";
import IconLogo from "./components/icons/IconLogo.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import HomeContent from "./components/HomeContent.vue";
import DestinationContent from "./components/DestinationContent.vue";
import CrewContent from "./components/CrewContent.vue";
import TechnologyContent from "./components/TechnologyContent.vue";

const main = useAppStore();
const { smallerThanMd } = useScreenWidth();
</script>

<template>
  <div>
    <div :class="{ 'flex items-center justify-between': smallerThanMd }">
      <IconLogo />
      <NavigationMenu />
    </div>
    <component
      :is="
        main.activeMenu === '00'
          ? HomeContent
          : main.activeMenu === '01'
          ? DestinationContent
          : main.activeMenu === '02'
          ? CrewContent
          : TechnologyContent
      "
    ></component>
  </div>
</template>
