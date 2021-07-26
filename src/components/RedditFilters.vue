<template>
  <div
    class="
      container
      flex
      md:gap-x-4
      md:flex-row
      items-center
      xl:justify-start
      justify-center
      flex-col flex-wrap
    "
  >
    <div class="filter-container">
      <p class="dropdown-label">Subreddit</p>
      <Multiselect
        class="filter filter-lg"
        v-model="selectedSubreddits"
        :options="subreddits"
        mode="multiple"
        placeholder="Select a Subreddit"
      >
        <template v-slot:option="{ option }">
          <DropdownOption
            :label="option.label"
            :icon="option.image"
            :iconStyle="'rounded-full w-[24px]'"
          />
        </template>
      </Multiselect>
    </div>
    <div class="filter-container">
      <p class="dropdown-label">Period</p>
      <Multiselect
        class="filter filter-lg"
        v-model="selectedInterval"
        :options="intervals"
        :maxHeight="intervalsDropdownHeight"
        placeholder="Select a period"
      >
        <template v-slot:option="{ option }">
          <DropdownOption :label="option.label" />
        </template>
      </Multiselect>
    </div>
    <div class="filter-container">
      <p class="dropdown-label">Category</p>
      <Multiselect
        class="filter filter-lg"
        v-model="selectedCategory"
        :options="categories"
        placeholder="Select a category"
      >
        <template v-slot:option="{ option }">
          <DropdownOption :label="option.label" :icon="option.image" :iconStyle="'w-[18px]'" />
        </template>
      </Multiselect>
    </div>
    <div
      class="flex flex-row relative items-center mt-6 w-max bg-grey rounded-md filter-lg h-[40px]"
    >
      <img :src="assets.search" class="w-4 h-4 ml-4" />
      <input
        type="text"
        placeholder="Search"
        v-model="searchText"
        class="filter filter-lg text-sm focus:outline-none ml-2"
      />
      <a v-if="searchText" v-on:click.prevent="clearClicked" class="multiselect-clear"></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref, watch } from 'vue';
import Multiselect from '@vueform/multiselect';
import { DropdownItem } from '../types/dropdownItem';
import DropdownOption from './DropdownOption.vue';
import {
  getEnumKeyByEnumValue,
  Subreddit,
  subredditToDropdownItem,
} from '../types/enums/subreddit';
import { RedditInterval, redditIntervalToDropdownItem } from '../types/enums/redditInterval';
import { MetricModel, metricModelToDropdownItem } from '../types/enums/metricModel';
import { useStore } from '../store';
import useDebouncedRef from '../composable/useDebouncedRef ';
import useAssets from '../composable/useAssets';

export default defineComponent({
  components: {
    Multiselect,
    DropdownOption,
  },
  setup() {
    const gtag = inject<any>('gtag');
    const store = useStore();

    const selectedSubreddits = ref<Array<string>>();
    selectedSubreddits.value = store.subreddits;

    const subreddits = ref<Array<DropdownItem>>();
    subreddits.value = Object.values(Subreddit).map((s) => subredditToDropdownItem(s));

    const selectedInterval = ref<string>();
    selectedInterval.value = store.interval;

    const intervals = ref<Array<DropdownItem>>();
    intervals.value = Object.values(RedditInterval).map((s) => redditIntervalToDropdownItem(s));

    // 40px * items + 5px (top margin)
    const intervalsDropdownHeight = 40 * intervals.value.length + 5;

    const selectedCategory = ref<string>();
    selectedCategory.value = store.model;

    const categories = ref<Array<DropdownItem>>();
    categories.value = Object.values(MetricModel).map((s) => metricModelToDropdownItem(s));

    const searchText = useDebouncedRef(store.query, 300);

    const clearClicked = () => {
      searchText.value = '';
    };

    watch(selectedSubreddits, () => {
      store.setSubreddits(selectedSubreddits.value?.map((e) => <Subreddit>e) ?? []);
      gtag.event('filter_change', {
        event_category: 'filters',
        event_label: 'subreddit',
        value: selectedSubreddits.value,
      });
    });

    watch(selectedInterval, () => {
      store.setInterval(<RedditInterval>selectedInterval.value ?? undefined);
      gtag.event('filter_change', {
        event_category: 'filters',
        event_label: 'interval',
        value: selectedInterval.value,
      });
    });

    watch(selectedCategory, () => {
      store.setModel(<MetricModel>selectedCategory.value ?? undefined);
      gtag.event('filter_change', {
        event_category: 'filters',
        event_label: 'category',
        value: selectedCategory.value,
      });
    });

    watch(searchText, (newValue) => {
      store.setQuery(newValue);
      gtag.event('filter_change', {
        event_category: 'filters',
        event_label: 'query',
        value: newValue,
      });
    });

    const assets = useAssets();

    return {
      selectedSubreddits,
      subreddits,
      selectedInterval,
      intervals,
      intervalsDropdownHeight,
      selectedCategory,
      categories,
      searchText,
      clearClicked,
      assets,
    };
  },
});
</script>

<style scoped lang="postcss">
.filter-container {
  @apply flex-col w-max mt-2 mb-2;
}
.filter {
  @apply h-[40px] rounded-md bg-grey p-0 text-white;
}

.filter-lg {
  @apply w-[320px];
}

.dropdown-label {
  @apply text-white ml-1 mb-1 text-sm font-medium;
}
</style>