<template>
  <div class="flex flex-row items-center">
    <img class="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" :src="image" />
    <a class="text-big ml-4 hover:underline" :href="link" target="_blank">{{ text }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
    image: {
      type: String,
    },
  },
});
</script>
