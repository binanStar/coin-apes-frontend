<template>
  <footer>
    <div class="flex flex-col items-center justify-center bg-grey h-24 md:h-24 w-screen">
      <div
        class="
          container
          flex flex-col
          space-y-4
          md:space-y-0
          md:flex-row
          justify-center
          items-center
        "
      >
        <p class="text-footer md:mt-0">Coin Apes © 2021. All Rights Reserved</p>
        <div class="flex flex-row space-x-6 md:ml-auto">
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