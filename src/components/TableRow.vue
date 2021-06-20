<template>
  <div class="overflow-scroll whitespace-nowrap">
    <div class="grid w-[1364px] grid-cols-12 gap-4 grid-rows-1 h-20 bg-grey">
      <div class="col-span-1 flex justify-center items-center">
        <p class="text-white text-sm">{{ entry.rank }}</p>
      </div>
      <div class="col-span-2 flex flex-row items-center">
        <img class="h-8 w-8 rounded-full ml-2" :src="entry.image" />
        <p class="text-white text-sm ml-4">{{ entry.name }}</p>
        <p class="text-white text-sm font-medium ml-4">{{ entry.symbol }}</p>
      </div>
      <div class="flex col-span-2 items-center">
        <TableBar class="ml-2 mr-2" :value="3"></TableBar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { ref } from 'vue';
import { MetricEntry } from '../types/metricEntry';
import TableBar from './TableBar.vue';

export default defineComponent({
  components: {
    TableBar,
  },
  props: {
    entry: {
      type: Object as PropType<MetricEntry>,
      required: true,
    },
  },
  setup() {},
});
</script>

<style>
</style>