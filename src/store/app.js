import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { destinations } from "../data/navigation.js";

export const useAppStore = defineStore("app", () => {
  const activeMenu = ref("00");
  const destinationMenu = ref("moon");

  const destination = computed(() =>
    destinations.find((x) => x.title === destinationMenu.value)
  );

  function updateMenu(id) {
    activeMenu.value = id;
  }

  function updateDestination(destination) {
    destinationMenu.value = destination;
  }

  function $reset() {
    activeMenu.value = "00";
  }

  return {
    activeMenu,
    destinationMenu,
    destination,
    updateMenu,
    updateDestination,
    $reset,
  };
});
