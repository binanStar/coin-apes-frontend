<template>
  <div class="flex flex-col h-screen w-screen bg-xinetic">
    <div class="flex items-center justify-center bg-grey p-0 text-white h-32">
      <div class="flex container items-center">
        <p class="text-4xl font-bold">Coin Apes</p>
        <div class="flex-grow flex items-center justify-end">
          <a class="nav-link m-9">Reddit</a>
          <a class="nav-link m-9">Roadmap</a>
          <a class="nav-link ml-9">About</a>
        </div>
      </div>
    </div>

    <TableRow class="justify-center mt-12" :entry="mockEntry" />

    <RedditFilters class="justify-center mt-12"></RedditFilters>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RedditFilters from '../components/RedditFilters.vue';
import TableRow from '../components/TableRow.vue';
import { MetricEntry } from '../types/metricEntry';

export default defineComponent({
  components: { RedditFilters, TableRow },
  setup() {
    const mockEntry = ref<MetricEntry>();
    mockEntry.value = {
      rank: 1,
      image:
        'data:image/png;base64,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',
      name: 'Bitcoin',
      symbol: 'BTC',
      value: 100,
      valueAsPercentage: 12.3,
      sentiment: 0.89,
      dates: [],
    };

    return {
      mockEntry,
    };
  },
});
</script>

<style lang="postcss">
.nav-link {
  @apply text-2xl text-white font-medium;
}
</style>