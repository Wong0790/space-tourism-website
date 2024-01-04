import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const activeMenu = ref("00");

  function updateMenu(id) {
    console.log("id", id);
    activeMenu.value = id;
  }

  function $reset() {
    activeMenu.value = "00";
  }

  return {
    activeMenu,
    updateMenu,
    $reset,
  };
});
