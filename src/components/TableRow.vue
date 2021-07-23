<template>
  <tr class="grid w-[1328px] grid-cols-12 gap-4 grid-rows-1 h-20 bg-grey">
    <td class="col-span-1 flex justify-center items-center">
      <p class="text-white text-sm">{{ entry.rank }}</p>
    </td>
    <td class="col-span-2 flex flex-row items-center">
      <img class="h-8 w-8 rounded-full ml-2" :src="entry.image" />
      <p class="text-white text-sm ml-4">{{ entry.name }}</p>
      <p class="text-white text-sm font-medium ml-4 uppercase">{{ entry.symbol }}</p>
    </td>
    <td class="flex col-span-3 items-center">
      <TableMentionsBar
        class="ml-2 mr-2"
        :value="entry.valueAsPercentage"
        :color="entry.color"
      ></TableMentionsBar>
    </td>
    <td class="flex col-span-1 justify-end items-center">
      <p class="text-white text-sm font-medium mr-2">{{ entry.value }}</p>
    </td>
    <td class="flex col-span-1 justify-end items-center">
      <p class="text-white text-sm font-medium mr-2">{{ entry.valueAsPercentage + '%' }}</p>
    </td>
    <td class="flex col-span-2 mt-4 mb-4 mr-2 items-cente">
      <Vue3ChartJs
        :type="lineChart.type"
        :data="lineChart.data"
        :options="lineChart.options"
        ref="chartRef"
      ></Vue3ChartJs>
    </td>
    <td class="flex col-span-2 items-center">
      <TableSentimentBar class="ml-2 mr-2" :value="entry.sentiment" />
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from '@vue/runtime-core';
import { MetricEntry } from '../types/metricEntry';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
import TableMentionsBar from './TableMentionsBar.vue';
import TableSentimentBar from './TableSentimentBar.vue';
import { onMounted, ref } from 'vue';

export default defineComponent({
  components: {
    Vue3ChartJs,
    TableMentionsBar,
    TableSentimentBar,
  },
  props: {
    entry: {
      type: Object as PropType<MetricEntry>,
      required: true,
    },
  },
  setup(props) {
    var mappedValue = props.entry.frequency.map((kv) => kv.value.toString());

    const chartRef = ref<null | { update: () => null }>(null);
    const lineChart = {
      id: 'line',
      type: 'line',
      data: {
        labels: mappedValue,
        datasets: [
          {
            label: 'dataset',
            data: mappedValue,
            borderColor: props.entry.color,
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

    watch(
      () => props.entry,
      () => {
        const updatedValues = props.entry.frequency.map((kv) => kv.value.toString());
        lineChart.data.labels = updatedValues;
        lineChart.data.datasets[0].data = updatedValues;
        lineChart.data.datasets[0].borderColor = props.entry.color;
        chartRef.value?.update();
      }
    );

    return {
      lineChart,
      chartRef,
    };
  },
});
</script>

<style>
</style>