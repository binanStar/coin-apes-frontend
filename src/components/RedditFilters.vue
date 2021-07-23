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
      <img src="/assets/search.svg" class="w-4 h-4 ml-4" />
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
import { defineComponent, ref, watch } from 'vue';
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

export default defineComponent({
  components: {
    Multiselect,
    DropdownOption,
  },
  setup() {
    const selectedSubreddits = ref<Array<string>>();
    selectedSubreddits.value = new Array<string>();

    const subreddits = ref<Array<DropdownItem>>();
    subreddits.value = Object.values(Subreddit).map((s) => subredditToDropdownItem(s));

    const selectedInterval = ref<string>();
    selectedInterval.value = '';

    const intervals = ref<Array<DropdownItem>>();
    intervals.value = Object.values(RedditInterval).map((s) => redditIntervalToDropdownItem(s));

    // 40px * items + 5px (top margin)
    const intervalsDropdownHeight = 40 * intervals.value.length + 5;

    const selectedCategory = ref<string>();
    selectedCategory.value = '';

    const categories = ref<Array<DropdownItem>>();
    categories.value = Object.values(MetricModel).map((s) => metricModelToDropdownItem(s));

    const searchText = useDebouncedRef('', 300);
    searchText.value = '';

    const clearClicked = () => {
      searchText.value = '';
    };

    const store = useStore();

    watch(selectedSubreddits, () => {
      store.setSubreddits(selectedSubreddits.value?.map((e) => <Subreddit>e) ?? []);
    });

    watch(selectedInterval, () => {
      store.setInterval(<RedditInterval>selectedInterval.value ?? undefined);
    });

    watch(selectedCategory, () => {
      store.setModel(<MetricModel>selectedCategory.value ?? undefined);
    });

    watch(searchText, (newValue) => {
      store.setQuery(newValue);
    });

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