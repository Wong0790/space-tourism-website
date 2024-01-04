import { ref } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export function useScreenWidth() {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const smallerThanMd = ref(breakpoints.smaller("md"));
  const smallerThanLg = ref(breakpoints.smaller("lg"));

  return { smallerThanMd, smallerThanLg };
}
