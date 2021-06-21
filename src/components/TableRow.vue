<template>
  <div>
    <div class="grid w-[1364px] grid-cols-12 gap-4 grid-rows-1 h-20 bg-grey">
      <div class="col-span-1 flex justify-center items-center">
        <p class="text-white text-sm">{{ entry.rank }}</p>
      </div>
      <div class="col-span-2 flex flex-row items-center">
        <img class="h-8 w-8 rounded-full ml-2" :src="entry.image" />
        <p class="text-white text-sm ml-4">{{ entry.name }}</p>
        <p class="text-white text-sm font-medium ml-4">{{ entry.symbol }}</p>
      </div>
      <div class="flex col-span-3 items-center">
        <TableBar
          class="ml-2 mr-2"
          :value="entry.valueAsPercentage"
          :color="dominantColor"
        ></TableBar>
      </div>
      <div class="flex col-span-1 justify-end items-center">
        <p class="text-white text-sm font-medium mr-2">{{ entry.value }}</p>
      </div>
      <div class="flex col-span-1 justify-end items-center">
        <p class="text-white text-sm font-medium mr-2">{{ entry.valueAsPercentage + '%' }}</p>
      </div>
      <div class="flex col-span-2 items-center">
        <div class="m-2">
          <Vue3ChartJs
            :type="lineChart.type"
            :data="lineChart.data"
            :options="lineChart.options"
            ref="chartRef"
          ></Vue3ChartJs>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from '@vue/runtime-core';
import { onMounted, ref } from 'vue';
import { MetricEntry } from '../types/metricEntry';
import TableBar from './TableBar.vue';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
import Vibrant from 'node-vibrant';

export default defineComponent({
  components: {
    TableBar,
    Vue3ChartJs,
  },
  props: {
    entry: {
      type: Object as PropType<MetricEntry>,
      required: true,
    },
  },
  setup(props) {
    // dominant color
    const dominantColor = ref<string>();
    const chartRef = ref<null | { update: () => null }>(null);

    const lineChart = {
      id: 'line',
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5'],
        datasets: [
          {
            label: 'dataset',
            data: [0, 5, 2, 3, 10, 3, 2, 1, 8, 10],
            borderColor: '',
            borderWidth: 2,
            tension: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              tickLength: 0,
              borderWidth: 0,
            },
            ticks: {
              display: false,
              major: {
                enabled: false,
              },
            },
          },
          y: {
            grid: {
              display: false,
              tickLength: 10,
              borderWidth: 0,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    };

    onMounted(async () => {
      try {
        const palette = await Vibrant.from(props.entry.image).getPalette();
        dominantColor.value = palette.Vibrant?.hex;
        lineChart.data.datasets[0].borderColor = palette.Vibrant?.hex ?? '';
        chartRef.value?.update();
      } catch (error) {
        console.log('Failed to load dominant color');
      }
    });

    return {
      lineChart,
      dominantColor,
      chartRef,
    };
  },
});
</script>

<style>
</style>