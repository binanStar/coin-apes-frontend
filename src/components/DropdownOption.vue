<template>
  <div class="flex items-center h-[40px] p-4 m-0 text-sm text-white">
    <img class="h-[24px] w-[24px] rounded-full bg-red" :src="icon" />
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
});
</script>

<style>
</style>