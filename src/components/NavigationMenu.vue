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
    <nav class="navigation nav-text" v-if="!smallerThanMd">
      <a
        v-for="item in menu"
        :key="item.id"
        :class="item.id === main.activeMenu ? 'nav-active' : 'nav-inactive'"
        @click="main.updateMenu(item.id)"
      >
        <span>{{ item.id }}</span>
        {{ item.title }}
      </a>
    </nav>
    <div v-else>
      <IconHamburger @click="showNavigation = true" v-show="!showNavigation" />
      <div class="navigation-mobile nav-text" v-show="showNavigation">
        <IconClose @click="showNavigation = false" />
        <a
          v-for="item in menu"
          :key="item.id"
          class="nav-inactive cursor-pointer"
          @click="main.updateMenu(item.id)"
        >
          <span>{{ item.id }}</span>
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>
