<template>
  <div class="container flex md:flex-row items-center xl:justify-start flex-col flex-wrap mx-auto">
    <div class="filter-container">
      <p class="dropdown-label">Subreddit</p>
      <Multiselect
        class="filter filter-lg"
        v-model="selectedSubreddit"
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
        class="filter filter-sm"
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
        class="filter filter-sm"
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
      class="
        flex flex-row
        items-center
        m-2
        mt-5
        md:self-end
        xl:ml-auto
        w-max
        bg-grey
        rounded-md
        filter-lg
        h-[40px]
      "
    >
      <img src="/src/assets/search.svg" class="w-4 h-4 ml-4" />
      <input
        type="text"
        placeholder="Search"
        class="filter filter-lg text-sm focus:outline-none ml-2"
      />
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

    console.log(categories);

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
  @apply flex-col w-max m-2;
}
.filter {
  @apply h-[40px] rounded-md bg-grey p-0 text-white;
}

.filter-sm {
  @apply md:w-[214px] w-[329px];
}

.filter-lg {
  @apply w-[329px];
}

.dropdown-label {
  @apply text-white ml-1 mb-1 text-sm font-medium;
}
</style>