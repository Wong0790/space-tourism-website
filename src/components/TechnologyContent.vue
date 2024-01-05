<script setup></script>

<template>
  <div class="body-content mt-16 lg:mt-24">
    <div>
      <h5 class="content-header">
        <span class="opacity-25">03</span>SPACE LAUNCH 101
      </h5>
    </div>
    <div>
      <img
        src="../../assets/crew/crew-member-1.png"
        :class="!smallerThanLg ? 'crew-member-img ' : 'hidden'"
      />
    </div>
  </div>
</template>
