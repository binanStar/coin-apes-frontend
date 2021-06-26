<template>
  <div class="flex flex-col h-screen bg-xinetic">
    <div class="flex items-center justify-center bg-grey p-0 text-white">
      <div class="flex flex-row container items-center md:h-24 h-16">
        <p class="md:text-4xl text-2xl font-bold md:m-0 ml-6">Coin Apes</p>
        <div class="flex flex-row ml-auto md:mr-0 mr-4">
          <p class="mr-4 text-xl font-medium">About</p>
          <img src="./assets/github.svg" class="h-6 w-6" />
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
