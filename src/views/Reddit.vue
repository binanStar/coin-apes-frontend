<template>
  <div class="flex flex-col justify-center">
    <RedditFilters class="self-center mt-12" />
    <div
      v-if="store.isLoading && store.currentPage === 1"
      class="loading-spinner self-center mt-8"
    ></div>
    <EmptyState v-if="isEmpty" class="mt-12" />
    <div ref="scrollComponent" v-else class="flex flex-col items-center self-center container">
      <RedditTable
        class="self-center mt-12 mb-16"
        :isLoading="store.isLoading"
        :entries="store.entries"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue';
import RedditFilters from '../components/RedditFilters.vue';
import RedditTable from '../components/RedditTable.vue';
import EmptyState from '../components/EmptyState.vue';
import { useStore } from '../store';

export default defineComponent({
  components: { RedditFilters, RedditTable, EmptyState },
  setup() {
    const store = useStore();
    const scrollComponent = ref<HTMLElement | null>(null);
    const isEmpty = computed(() => {
      return store.entries === undefined || store.entries.length === 0;
    });

    const handleScroll = (_) => {
      let element = scrollComponent.value;
      if (
        element !== null &&
        element.getBoundingClientRect().bottom < window.innerHeight &&
        store.canFetchMore &&
        !store.isLoading
      ) {
        store.getRedditMetric(store.page);
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      store,
      isEmpty,
      scrollComponent,
    };
  },
});
</script>

<style lang="postcss">
.nav-link {
  @apply text-2xl text-white font-medium;
}
</style>