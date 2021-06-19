<template>
  <div class="container flex space-x-4 flex-row mx-auto">
    <div class="filter-container">
      <p class="dropdown-label">Subreddit</p>
      <Multiselect
        class="dropdown dropdown-lg"
        v-model="selectedSubreddit"
        :options="subreddits"
        mode="multiple"
        placeholder="Select a Subreddit"
      >
        <template v-slot:option="{ option }">
          <DropdownOption :label="option.label" :icon="option.image" />
        </template>
      </Multiselect>
    </div>
    <div class="filter-container">
      <p class="dropdown-label">Period</p>
      <Multiselect
        class="dropdown dropdown-sm"
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
        class="dropdown dropdown-sm"
        v-model="selectedCategory"
        :options="categories"
        placeholder="Select a category"
      >
        <template v-slot:option="{ option }">
          <DropdownOption :label="option.label" />
        </template>
      </Multiselect>
    </div>
    <div class="filter-container">
      <p class="dropdown-label">View Type</p>
      <Multiselect
        class="dropdown dropdown-sm"
        v-model="selectedViewType"
        :options="viewTypes"
        placeholder="Select a view Type"
      >
        <template v-slot:option="{ option }">
          <DropdownOption :label="option.label" />
        </template>
      </Multiselect>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import { DropdownItem } from '../types/dropdownItem';
import DropdownOption from './DropdownOption.vue';
import { Subreddit, subredditToDropdownItem } from '../types/enums/subreddit';
import { RedditInterval, redditIntervalToDropdownItem } from '../types/enums/redditInterval';
import { MetricModel, metricModelToDropdownItem } from '../types/enums/metricModel';
import { ResultsViewType, resultsViewTypeToDropdownItem } from '../types/enums/resultsViewType';

export default defineComponent({
  components: {
    Multiselect,
    DropdownOption,
  },
  setup() {
    const selectedSubreddit = ref<Array<DropdownItem>>();
    selectedSubreddit.value = [];

    const subreddits = ref<Array<DropdownItem>>();
    subreddits.value = Object.values(Subreddit).map((s) => subredditToDropdownItem(s));

    const selectedInterval = ref<DropdownItem>();
    selectedInterval.value = { label: '', value: '', image: '' };

    const intervals = ref<Array<DropdownItem>>();
    intervals.value = Object.values(RedditInterval).map((s) => redditIntervalToDropdownItem(s));

    // 40px * items + 5px (top margin)
    const intervalsDropdownHeight = 40 * intervals.value.length + 5;

    const selectedCategory = ref<DropdownItem>();
    selectedCategory.value = { label: '', value: '', image: '' };

    const categories = ref<Array<DropdownItem>>();
    categories.value = Object.values(MetricModel).map((s) => metricModelToDropdownItem(s));

    const selectedViewType = ref<DropdownItem>();
    selectedViewType.value = { label: '', value: '', image: '' };

    const viewTypes = ref<Array<DropdownItem>>();
    viewTypes.value = Object.values(ResultsViewType).map((s) => resultsViewTypeToDropdownItem(s));

    return {
      selectedSubreddit,
      subreddits,
      selectedInterval,
      intervals,
      intervalsDropdownHeight,
      selectedCategory,
      categories,
      selectedViewType,
      viewTypes,
    };
  },
});
</script>

<style scoped lang="postcss">
.filter-container {
  @apply flex-col w-max;
}
.dropdown {
  @apply h-[40px] rounded-md bg-grey p-0 text-white;
}

.dropdown-sm {
  @apply w-[214px];
}

.dropdown-lg {
  @apply w-[329px];
}

.dropdown-label {
  @apply text-white ml-1 mb-1 text-sm font-medium;
}
</style>