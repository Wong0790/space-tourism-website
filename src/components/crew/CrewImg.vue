<script setup>
import { computed } from "vue";
import { loadImg, useScreenWidth } from "../../composables/common.js";

const props = defineProps(["index"]);

const { smallerThanLg } = useScreenWidth();
const imgName = computed(() => `crew-member-${props.index}.png`);
</script>

<template>
  <div
    class="content-width mt-auto"
    :class="{ 'max-w-[20.125rem]': smallerThanLg }"
  >
    <img
      :src="loadImg('crew', imgName)"
      :class="!smallerThanLg ? 'ml-auto' : 'mx-auto'"
    />
  </div>
</template>
