<template>
  <div class="flex flex-col h-screen bg-xinetic">
    <div class="flex items-center justify-center bg-grey text-white">
      <div class="flex flex-row container items-center md:h-24 h-16">
        <a href="/" class="md:text-4xl text-xl font-bold">Coin Apes</a>
        <div class="flex flex-row ml-auto md:mr-0 mr-4">
          <a href="about" class="mr-4 text-nav">About</a>
          <a class="mr-4 text-nav">Privacy</a>
          <a href="support" class="text-nav">Support</a>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <vue-progress-bar class="self-center"></vue-progress-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, watch } from 'vue';
import { useStore } from './store';

export default defineComponent({
  name: 'App',
  setup() {
    var store = useStore();
    const internalInstance = getCurrentInstance();

    watch(
      () => store.isLoading,
      (newValue) => {
        if (newValue) {
          internalInstance?.appContext.config.globalProperties.$Progress.start();
        } else {
          internalInstance?.appContext.config.globalProperties.$Progress.finish();
        }
      }
    );
  },
});
</script>

<style lang="postcss" scoped>
.text-nav {
  @apply text-base md:text-xl font-medium hover:text-violet;
}
</style>