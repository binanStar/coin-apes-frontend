<template>
  <div class="flex items-center justify-center bg-grey text-white">
    <div class="flex flex-row container items-center md:h-24 h-16">
      <router-link class="md:text-4xl text-xl font-bold" to="/">Coin Apes</router-link>
      <div class="flex flex-row ml-auto md:mr-0 mr-4">
        <router-link class="mr-4 md:mr-8 text-nav" to="about">About</router-link>
        <router-link class="text-nav" to="support">Support</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss">
.text-nav {
  @apply text-base md:text-xl font-medium hover:text-violet;
}
</style>