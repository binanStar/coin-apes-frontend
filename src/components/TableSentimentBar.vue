<template>
  <div class="h-6 rounded-r-full" :class="bgClass" :style="{ width: width + 'px' }"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ref, watch } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const bgClass = ref();
    const width = ref();

    const update = () => {
      // col size * 2
      const maxWidth = 99 * 2;
      width.value = Math.floor(maxWidth * props.value);

      if (props.value >= 0.8) {
        bgClass.value = 'bg-green';
      } else if (0.6 <= props.value && props.value < 0.8) {
        bgClass.value = 'bg-greenlow';
      } else if (0.4 <= props.value && props.value < 0.6) {
        bgClass.value = 'bg-yellow';
      } else if (0.2 <= props.value && props.value < 0.4) {
        bgClass.value = 'bg-orange';
      } else {
        bgClass.value = 'bg-red';
      }
    };

    update();

    watch(
      () => props.value,
      () => {
        update();
      }
    );

    return {
      width,
      bgClass,
    };
  },
});
</script>

<style>
</style>