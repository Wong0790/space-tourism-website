<script setup>
import { onMounted, onUnmounted, computed, ref } from "vue";
import { technology } from "../data/navigation.js";
import {
  addClass,
  removeClass,
  loadImg,
  useScreenWidth,
} from "../composables/common.js";

const option = ref(0);
const { smallerThanLg, smallerThanMd } = useScreenWidth();
const imgName = computed(() => `portrait-${option.value + 1}.jpg`);

onMounted(() => {
  addClass("bg-technology");
});

onUnmounted(() => {
  removeClass("bg-technology");
});
</script>

<template>
  <div>
    <h5 class="content-header">
      <span class="opacity-25">03</span>SPACE LAUNCH 101
    </h5>
    <div
      class="body-content"
      :style="
        smallerThanMd
          ? 'padding-right: 1.5rem'
          : smallerThanLg
          ? 'padding-right: 2.5rem'
          : 'padding-right: 0'
      "
    >
      <div
        class="flex flex-col lg:flex-row gap-10 md:gap-20 flex-initial w-3/4 md:w-3/5 xl:w-6/12"
      >
        <div class="flex flex-row justify-center lg:flex-col gap-4 md:gap-8">
          <div
            v-for="(n, index) in 3"
            :key="n"
            class="tech-option-container"
            :class="option === index ? 'bg-white' : 'tech-option-inactive'"
            @click="option = index"
          >
            <h4>{{ n }}</h4>
          </div>
        </div>
        <div :class="{ 'text-center': smallerThanLg }">
          <p class="uppercase text-light-purple">The Terminology…</p>
          <h3 class="uppercase w-full">{{ technology[option].name }}</h3>
          <p class="text-light-purple mt-6">
            {{ technology[option].description }}
          </p>
        </div>
      </div>
      <div class="flex-initial w-full lg:w-2/5 xl:w-6/12">
        <img
          :src="loadImg('technology', imgName)"
          :class="!smallerThanLg ? 'ml-auto' : 'mx-auto'"
        />
      </div>
    </div>
  </div>
</template>
