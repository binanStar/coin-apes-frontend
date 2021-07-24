<template>
  <div class="flex flex-col h-screen bg-xinetic">
    <Navbar></Navbar>
    <router-view class="flex-grow"></router-view>
    <transition name="slide">
      <CookieBanner v-if="showBanner" @ok-clicked="okBannerClicked"></CookieBanner>
    </transition>
    <vue-progress-bar class="self-center"></vue-progress-bar>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, watch, ref, computed } from 'vue';
import { useStore } from './store';
import Footer from 'components/Footer.vue';
import Navbar from 'components/Navbar.vue';
import CookieBanner from './components/CookieBanner.vue';
import useCookies from './composable/useCookies';

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Navbar,
    CookieBanner,
  },
  setup() {
    var store = useStore();
    const prograssBar = inject<any>('progressBar');

    const gtag = inject<any>('gtag');
    const { showBanner, okClicked } = useCookies(gtag);
    const okBannerClicked = () => okClicked();

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

    return {
      showBanner,
      okBannerClicked,
    };
  },
});
</script>

<style lang="postcss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>