<template>
  <div class="flex flex-col container px-0">
    <div class="flex overflow-x-auto w-full">
      <table class="justify-center">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableRow
            :entry="entry"
            v-for="entry in entries"
            :key="entry.id"
            class="last:rounded-b-md border-t-2 border-[#585879]"
          />
        </tbody>
      </table>
    </div>
    <div v-if="isLoading" class="loading-spinner mt-4 justify-center self-center"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TableHeader from './TableHeader.vue';
import { MetricEntry } from '../types/metricEntry';
import { PropType } from 'vue';
import TableRow from './TableRow.vue';

export default defineComponent({
  props: {
    entries: {
      type: Object as PropType<MetricEntry[]>,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: { TableHeader, TableRow },
});
</script>

<style>
</style>