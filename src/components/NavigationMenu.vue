<script setup>
import { ref } from "vue";
import { useAppStore } from "../store/app";
import { menu } from "../data/navigation.js";
import IconHamburger from "./icons/IconHamburger.vue";
import IconClose from "./icons/IconClose.vue";
import { useScreenWidth } from "../composables/common.js";

const main = useAppStore();
const { smallerThanMd } = useScreenWidth();
const showNavigation = ref(false);
</script>

<template>
  <div>
    <IconHamburger
      @click="showNavigation = true"
      v-show="smallerThanMd && !showNavigation"
    />
    <nav
      class="nav-text"
      :class="!smallerThanMd ? 'navigation' : 'navigation-mobile'"
      v-if="showNavigation || !smallerThanMd"
    >
      <IconClose @click="showNavigation = false" v-show="smallerThanMd" />
      <a
        v-for="item in menu"
        :key="item.id"
        class="cursor-pointer"
        :class="
          item.id === main.activeMenu && !smallerThanMd
            ? 'nav-active'
            : 'nav-inactive'
        "
        @click="main.updateMenu(item.id)"
      >
        <span>{{ item.id }}</span>
        {{ item.title }}
      </a>
    </nav>
  </div>
</template>
