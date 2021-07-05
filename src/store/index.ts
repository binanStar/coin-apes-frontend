import { defineStore } from 'pinia';
import axiosInstance from '../composable/useAxios';
import { MetricModel } from '../types/enums/metricModel';
import { RedditInterval } from '../types/enums/redditInterval';
import { Subreddit } from '../types/enums/subreddit';
import { RedditMetric } from '../types/redditMetric';
import qs from 'qs';
import { MetricEntry } from '../types/metricEntry';

export type RootState = {
  metric: RedditMetric;
  subreddits: Array<Subreddit>;
  interval: RedditInterval | undefined;
  model: MetricModel | undefined;
};

export const useStore = defineStore({
  id: 'coinApesStore',
  state: () =>
    ({
      metric: {
        model: MetricModel.Coin,
        interval: RedditInterval.Day,
        subreddits: [],
        entries: {},
      },
      subreddits: [],
      interval: undefined,
      model: undefined,
    } as RootState),
  getters: {
    entries(): MetricEntry[] {
      return Object.values(this.metric.entries);
    },
  },
  actions: {
    setSubreddits(subreddits: Array<Subreddit>) {
      this.subreddits = subreddits;
      this.getRedditMetric();
    },
    setInterval(interval: RedditInterval) {
      this.interval = interval;
      this.getRedditMetric();
    },
    setModel(model: MetricModel) {
      this.model = model;
      this.getRedditMetric();
    },
    async getRedditMetric() {
      if (this.subreddits.length > 0 && this.model !== undefined && this.interval != undefined) {
        try {
          const result = await axiosInstance.get<RedditMetric>('/api/redditMetric', {
            params: {
              model: this.model,
              subreddits: this.subreddits,
              interval: this.interval,
            },
            paramsSerializer: (params) => {
              return qs.stringify(params);
            },
          });
          this.metric = result.data;
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
});
