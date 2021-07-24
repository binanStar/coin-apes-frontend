<template>
  <div class="absolute mt-16 md:mt-24 flex flex-col items-center w-full bg-darkerGrey h-28 md:h-24">
    <div class="container flex flex-col md:flex-row items-center h-full">
      <p class="text-white text-sm md:text-lg text-center mt-3 md:mt-0 mx-10 md:mx-0">
        We use 🍪 for more details check our policy
        <router-link class="text-violet text-sm md:text-lg" to="cookies">here</router-link>
      </p>
      <button class="btn-sm mt-4 md:mt-0 md:ml-auto" @click="$emit('okClicked')">OK</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  emits: ['okClicked'],
  setup(props) {
    const gtag = inject<any>('gtag');
  },
});
</script>

<style>
</style>