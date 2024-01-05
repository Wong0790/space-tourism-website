<script setup>
import { useScreenWidth } from "../../composables/common.js";

const { smallerThanLg } = useScreenWidth();
</script>

<template>
  <div class="content-width w-fit mt-auto">
    <img
      src="../../assets/crew/crew-member-1.png"
      :class="!smallerThanLg ? 'crew-member-img ' : 'hidden'"
    />
  </div>
</template>
