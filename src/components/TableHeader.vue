<template>
  <tr class="grid w-[1328px] grid-cols-12 gap-4 grid-rows-1 h-10 bg-grey rounded-t-md">
    <th class="flex col-span-1 items-center">
      <p class="header-text ml-2"># Rank</p>
    </th>
    <th class="flex col-span-2 items-center">
      <p class="header-text ml-2">Name</p>
      <VTooltip theme="info-tooltip">
        <template #default>
          <div class="p-2">
            <img :src="assets.info" class="info" />
          </div>
        </template>
        <template #popper>
          <div class="p-4">
            <p class="text-sm">
              Considered coins:
              <br />
              &#8226; In the top 1000 by market cap (based on
              <span class="text-violet">CoinGecko</span>
              )
              <br />
              OR
              <br />
              &#8226; Volume in the last 24h >= $1,000,000
            </p>
          </div>
        </template>
      </VTooltip>
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
      <VTooltip theme="info-tooltip">
        <template #default>
          <div class="p-2">
            <img :src="assets.info" class="info" />
          </div>
        </template>
        <template #popper>
          <div class="p-4">
            <p class="text-sm">Ploted mentions based on Interval</p>
            <p class="text-sm mt-2">
              E.g. When day is selected:
              <br />
              X axis - hour
              <br />
              Y axis - mentions
            </p>
          </div>
        </template>
      </VTooltip>
    </th>
    <th class="flex col-span-2 items-center">
      <p class="header-text ml-2">Sentiment</p>
      <VTooltip theme="info-tooltip">
        <template #default>
          <div class="p-2">
            <img :src="assets.info" class="info" />
          </div>
        </template>
        <template #popper>
          <div class="p-4">
            <p class="text-sm">
              Average sentiment from post
              <br />
              title and/or post content.
            </p>
            <p class="mt-2 text-sm">
              <span class="text-violet font-bold">NOTE</span>
              : This feature is still in BETA
            </p>
          </div>
        </template>
      </VTooltip>
    </th>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import useAssets from '../composable/useAssets';

export default defineComponent({
  setup() {
    return {
      assets: useAssets(),
    };
  },
});
</script>

<style lang="postcss" scoped>
.header-text {
  @apply text-sm font-medium text-white;
}
.info {
  @apply h-[12px] w-[12px];
}
</style>