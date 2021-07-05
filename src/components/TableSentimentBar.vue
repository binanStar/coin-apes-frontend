<template>
  <div class="h-6 rounded-r-full" :class="bgClass" :style="{ width: width + 'px' }"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    // col size * 2
    const maxWidth = 99 * 2;
    const width = Math.floor(maxWidth * props.value);

    let bgClass = '';

    if (props.value >= 0.75) {
      bgClass = 'bg-green';
    } else if (0.35 < props.value && props.value < 0.75) {
      bgClass = 'bg-yellow';
    } else {
      bgClass = 'bg-red';
    }

    return {
      width,
      bgClass,
    };
  },
});
</script>

<style>
</style>