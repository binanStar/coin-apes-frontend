<template>
  <footer>
    <div class="flex flex-col items-center justify-center bg-grey h-24 md:h-24 w-screen">
      <div class="container flex flex-col md:flex-row justify-center items-center">
        <p class="text-footer mt-6 md:mt-0">Coin Apes © 2021. All Rights Reserved</p>
        <div class="flex flex-row space-x-6 md:ml-auto mt-6 mb-6 md:mt-0 md:mb-0">
          <router-link class="text-footer hover:text-violet" to="terms">Terms of Use</router-link>
          <router-link class="text-footer hover:text-violet" to="privacy">
            Privacy Policy
          </router-link>
          <a class="text-footer hover:text-violet">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="postcss">
.text-footer {
  @apply text-white text-sm;
}
</style>