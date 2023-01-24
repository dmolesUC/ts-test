<script setup lang="ts">
import { Ref, ref } from 'vue'
import { doIncrement } from '../helpers/helpers';

defineProps<{ msg: string }>()

const count: Ref<number | undefined> = ref(0)

function incrementCount() {
  const c = <number>count.value
  count.value = c + 1
}

const count2: Ref<number | undefined> = ref(0)
function incrementCount2() {
  doIncrement(count2)
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="incrementCount">count is {{ count }}</button>
    <button type="button" @click="incrementCount2">count2 is {{ count2 }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
button {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
