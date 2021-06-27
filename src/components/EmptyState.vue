<template>
  <div class="flex flex-col justify-center items-center">
    <p class="text-white md:text-4xl text-2xl font-bold">{{ title }}</p>
    <p class="text-white md:text-base text-sm font-regular md:w-auto w-48 text-center mt-2">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'No results',
    },
    description: {
      type: String,
      default: "We couldn't find any results matching your filters.",
    },
  },
});
</script>

<style>
</style>