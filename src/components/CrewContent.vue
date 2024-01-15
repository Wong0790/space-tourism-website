<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useScreenWidth } from "../composables/common.js";
import { addClass, removeClass } from "../composables/common.js";
import { crew } from "../data/navigation.js";
import CrewSlider from "./icons/CrewSlider.vue";
import CrewImg from "./crew/CrewImg.vue";

const { smallerThanLg } = useScreenWidth();
const imgIndex = ref(1);

const changeCrewImg = (n) => (imgIndex.value = n);

onMounted(() => {
  addClass("bg-crew");
});

onUnmounted(() => {
  removeClass("bg-crew");
});
</script>

<template>
  <div>
    <h5 class="content-header">
      <span class="opacity-25">02</span>Meet your crew
    </h5>
    <div
      class="body-content"
      style="padding-bottom: 0"
      :style="
        !smallerThanLg
          ? 'height: calc(100vh - 13.6rem); justify-content: center;'
          : 'display: hidden'
      "
    >
      <div>
        <h4
          class="mt-12 lg:mt-36 uppercase opacity-50 text-center lg:text-left"
        >
          {{ crew[imgIndex - 1].position }}
        </h4>
        <h3 class="uppercase text-center lg:text-left">
          {{ crew[imgIndex - 1].name }}
        </h3>
        <p
          class="text-light-purple max-w-[27.75rem] h-40 text-center lg:text-left"
          :class="{ 'mx-auto': smallerThanLg }"
        >
          {{ crew[imgIndex - 1].description }}
        </p>
        <CrewSlider
          class="mt-10 md:mt-20 mx-auto lg:ml-0"
          @changeCrewImg="changeCrewImg"
        />
      </div>
      <CrewImg :index="imgIndex" />
    </div>
  </div>
</template>
