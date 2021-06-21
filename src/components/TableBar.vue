<template>
  <div class="h-6 rounded-r-full" :style="{ width: width + 'px', backgroundColor: color }"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    // col size * 3 + 16 (one space)
    const maxWidth = 99 * 3 + 16;
    const width = Math.floor((maxWidth * props.value) / 100);

    return {
      width,
    };
  },
});
</script>

<style>
</style>