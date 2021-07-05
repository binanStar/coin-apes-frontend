<template>
  <div class="flex flex-col justify-center bg-xinetic">
    <RedditFilters class="self-center mt-12" />
    <EmptyState v-if="isEmpty" class="mt-12" />
    <RedditTable v-else class="self-center mt-12" :entries="store.entries" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import RedditFilters from '../components/RedditFilters.vue';
import RedditTable from '../components/RedditTable.vue';
import { MetricEntry } from '../types/metricEntry';
import EmptyState from '../components/EmptyState.vue';
import { useStore } from '../store';

export default defineComponent({
  components: { RedditFilters, RedditTable, EmptyState },
  setup() {
    const store = useStore();

    const isEmpty = computed(() => {
      return store.entries === undefined || store.entries.length === 0;
    });

    return {
      store,
      isEmpty,
    };
  },
});
</script>

<style lang="postcss">
.nav-link {
  @apply text-2xl text-white font-medium;
}
</style>