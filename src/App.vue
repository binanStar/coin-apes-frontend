<template>
  <div class="flex flex-col h-screen bg-xinetic">
    <div class="flex items-center justify-center bg-grey text-white">
      <div class="flex flex-row container items-center md:h-24 h-16">
        <p class="md:text-4xl text-2xl font-bold">Coin Apes</p>
        <div class="flex flex-row ml-auto md:mr-0 mr-4">
          <p class="mr-4 text-xl font-medium">About</p>
          <img src="./assets/github.svg" class="h-6 w-6" />
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
