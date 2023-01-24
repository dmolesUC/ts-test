import { Ref } from "vue";

export function doIncrement(counter: Ref<number | undefined>) {
  const c = <number> counter.value
  counter.value = c + 1
}
