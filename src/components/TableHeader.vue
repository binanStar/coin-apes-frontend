<template>
  <tr class="grid w-[1328px] grid-cols-12 gap-4 grid-rows-1 h-10 bg-grey rounded-t-md">
    <th class="flex col-span-1 items-center">
      <p class="header-text ml-2"># Rank</p>
    </th>
    <th class="flex col-span-2 items-center">
      <p class="header-text ml-2">Name</p>
    </th>
    <th class="flex col-span-3 items-center">
      <p class="header-text ml-2">Mentions</p>
    </th>
    <th class="flex col-span-1 items-center justify-end">
      <p class="header-text mr-2">Count</p>
    </th>
    <th class="flex col-span-1 items-center justify-end">
      <p class="header-text mr-2">%</p>
    </th>
    <th class="flex col-span-2 items-center">
      <p class="header-text ml-2">Frequency</p>
    </th>
    <th class="flex col-span-2 items-center">
      <p class="header-text ml-2">Sentiment</p>
    </th>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.header-text {
  @apply text-sm font-medium text-white;
}
</style>