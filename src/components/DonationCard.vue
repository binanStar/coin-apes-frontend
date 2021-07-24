<template>
  <div class="flex flex-col items-center w-80 h-[380px] bg-grey rounded-md shadow-md">
    <div class="flex flex-row items-center space-x-2 mt-6">
      <img class="w-8 h-8" :src="icon" />
      <p class="text-white text-2xl font-bold">{{ title }}</p>
    </div>
    <img class="w-36 h-36 mt-6" :src="qr" />
    <p class="text-white text-sm break-all text-center mt-6 ml-6 mr-6">
      {{ address }}
    </p>
    <VTooltip theme="copy-tooltip">
      <template #default>
        <button
          v-clipboard="address"
          class="bg-violet w-32 h-8 rounded-md text-white hover:bg-violetLight mt-6"
          @click="onClick"
        >
          COPY
        </button>
      </template>
      <template #popper>
        <div class="p-4">
          <p class="text-sm">Copied to clipboard</p>
        </div>
      </template>
    </VTooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  props: {
    title: String,
    icon: String,
    qr: String,
    address: String,
  },
  setup(props) {
    const gtag = inject<any>('gtag');

    const onClick = () => {
      gtag.event('donation_clicked', {
        event_category: 'donation',
        event_label: 'donation',
        value: props.title,
      });
    };

    return {
      onClick,
    };
  },
});
</script>

<style>
</style>