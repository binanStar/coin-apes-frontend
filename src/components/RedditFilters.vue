<template>
  <div class="container flex flex-row bg-red mx-auto">
    <div class="filter-container bg-green">
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
    <DropdownOption />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import { useStore } from '../store';
import { DropdownItem } from '../types/dropdownItem';
import DropdownOption from './DropdownOption.vue';

export default defineComponent({
  components: {
    Multiselect,
    DropdownOption,
  },
  setup() {
    const store = useStore();

    const selectedSubreddit = ref<Array<DropdownItem>>();
    selectedSubreddit.value = [];

    const subreddits = ref<Array<DropdownItem>>();
    subreddits.value = store.getters.allSubreddits.map((s) => {
      return {
        label: s.name,
        value: s.name,
        image: s.image,
      };
    });

    return {
      selectedSubreddit,
      subreddits,
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

.dropdown-lg {
  @apply w-[329px];
}

.dropdown-label {
  @apply text-white ml-1 mb-1 text-sm font-medium;
}
</style>