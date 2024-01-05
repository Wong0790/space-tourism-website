<script setup>
import { useAppStore } from "../store/app";
import { useScreenWidth } from "../composables/common.js";

const main = useAppStore();
const { smallerThanLg } = useScreenWidth();
</script>

<template>
  <div class="body-content mt-20 lg:mt-80">
    <div :class="{ 'text-center': smallerThanLg }" class="content-width">
      <h5 class="text-light-purple">SO, YOU WANT TO TRAVEL TO</h5>
      <h1>SPACE</h1>
      <div
        :class="{ 'max-w-[27.75rem]': !smallerThanLg }"
        class="text-light-purple"
      >
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </div>
    </div>
    <div class="content-width mt-auto text-center lg:text-end">
      <button class="btn-explore" @click="main.updateMenu('01')">
        <h4>explore</h4>
      </button>
    </div>
  </div>
</template>
