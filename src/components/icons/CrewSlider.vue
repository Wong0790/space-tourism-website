<script setup>
import { ref } from "vue";
const emit = defineEmits(["changeCrewImg"]);

const circleN = ref(0);
const cx = ["7.5", "46.5", "85.5", "124.5"];

const onChange = (n) => {
  emit("changeCrewImg", n);
  circleN.value = n - 1;
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="132"
    height="15"
    viewBox="0 0 132 15"
    fill="none"
  >
    <circle
      v-for="(n, index) in 4"
      :key="n"
      :cx="cx[index]"
      cy="7.5"
      r="7.5"
      fill="white"
      :opacity="index !== circleN ? '0.174363' : '1'"
      class="cursor-pointer"
      @click="onChange(n)"
    />
  </svg>
</template>
