<template>
  <div class="flex items-center h-[40px] p-4 m-0 text-sm text-white">
    <img v-if="isIconVisible()" class="h-[24px] w-[24px] mr-2 rounded-full" :src="icon" />
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    label: String,
    icon: String,
  },
  methods: {
    isIconVisible() {
      return this.icon && this.icon !== '';
    },
  },
});
</script>

<style>
</style>