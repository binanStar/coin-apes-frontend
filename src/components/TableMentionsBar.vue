<template>
  <div class="h-6 rounded-r-full" :style="{ width: width + 'px', backgroundColor: bgColor }"></div>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/runtime-core';
import { ref } from 'vue';

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
    const width = ref();
    const bgColor = ref();

    const updateWidth = () => {
      width.value = Math.floor((maxWidth * props.value) / 100);
    };

    const updateColor = () => {
      bgColor.value = props.color;
    };

    updateWidth();
    updateColor();

    watch(
      () => props.value,
      () => {
        updateWidth();
      }
    );

    watch(
      () => props.color,
      () => {
        updateColor();
      }
    );

    return {
      width,
      bgColor,
    };
  },
});
</script>

<style>
</style>