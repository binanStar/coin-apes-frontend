<template>
  <div>
    <div class="flex items-center justify-center bg-grey p-0 text-white h-32">
      <div class="flex container items-center">
        <p class="text-4xl font-bold">Coin Apes</p>
        <p>About</p>
        <p>Github</p>
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
