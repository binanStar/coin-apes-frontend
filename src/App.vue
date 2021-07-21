<template>
  <div class="flex flex-col h-screen bg-xinetic">
    <Navbar></Navbar>
    <router-view class="flex-grow"></router-view>
    <vue-progress-bar class="self-center"></vue-progress-bar>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject, watch } from 'vue';
import { useStore } from './store';
import Footer from 'components/Footer.vue';
import Navbar from 'components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
  setup() {
    var store = useStore();

    const prograssBar = inject<any>('progressBar');

    watch(
      () => store.isLoading,
      (newValue) => {
        if (newValue) {
          prograssBar.start();
        } else {
          prograssBar.finish();
        }
      }
    );
  },
});
</script>

<style lang="postcss" scoped>
</style>