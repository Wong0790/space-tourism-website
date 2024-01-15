import { ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export function useScreenWidth() {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const smallerThanSm = ref(breakpoints.smaller("sm"));
  const smallerThanMd = ref(breakpoints.smaller("md"));
  const smallerThanLg = ref(breakpoints.smaller("lg"));

  return { smallerThanSm, smallerThanMd, smallerThanLg };
}

export function addClass(nameClass) {
  document.body.classList.add(`${nameClass}`);
}

export function removeClass(nameClass) {
  document.body.classList.remove(`${nameClass}`);
}

export function loadImg(folder, nameImg) {
  return new URL(`../assets/${folder}/${nameImg}`, import.meta.url).href;
}
