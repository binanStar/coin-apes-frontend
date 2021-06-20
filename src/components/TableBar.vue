<template>
  <div class="h-6 rounded-r-full bg-red" :style="{ width: width + 'px' }"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
    color: String,
  },
  setup(props) {
    // col size * 2
    const maxWidth = 99 * 2;
    const width = Math.floor((maxWidth * props.value) / 100);

    console.log(maxWidth);
    console.log(width);

    return {
      width,
    };
  },
});
</script>

<style>
</style>