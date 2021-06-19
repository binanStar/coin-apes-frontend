<template>
  <div class="flex items-center justify-center bg-grey p-0 text-white h-32">
    <div class="flex container items-center">
      <p class="text-4xl font-bold">Coin Apes</p>
      <div class="flex-grow flex items-center justify-end">
        <a class="nav-link m-9">Reddit</a>
        <a class="nav-link m-9">Roadmap</a>
        <a class="nav-link ml-9">About</a>
      </div>
    </div>
  </div>

  <RedditFilters class="justify-center mt-12"></RedditFilters>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RedditFilters from '../components/RedditFilters.vue';

export default defineComponent({
  components: { RedditFilters },
  setup() {},
});
</script>

<style lang="postcss">
.nav-link {
  @apply text-2xl text-white font-medium;
}
</style>