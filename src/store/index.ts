import { defineStore } from 'pinia';
import axiosInstance from '../composable/useAxios';
import { MetricModel } from '../types/enums/metricModel';
import { RedditInterval } from '../types/enums/redditInterval';
import { Subreddit } from '../types/enums/subreddit';
import { RedditMetric } from '../types/redditMetric';
import qs from 'qs';
import { MetricEntry } from '../types/metricEntry';
import axios, { CancelTokenSource } from 'axios';

export type RootState = {
  entries: Array<MetricEntry>;
  subreddits: Array<Subreddit>;
  interval: RedditInterval | undefined;
  model: MetricModel | undefined;
  page: number;
  isLoading: boolean;
  cancellationToken: CancelTokenSource;
};

export const useStore = defineStore({
  id: 'coinApesStore',
  state: () =>
    ({
      entries: new Array<MetricEntry>(),
      subreddits: [],
      interval: undefined,
      model: undefined,
      page: 1,
      isLoading: false,
      cancellationToken: axios.CancelToken.source(),
    } as RootState),
  getters: {
    currentPage(): number {
      return this.page;
    },
  },
  actions: {
    setSubreddits(subreddits: Array<Subreddit>) {
      this.subreddits = subreddits;
      this.getRedditMetric(1);
    },
    setInterval(interval: RedditInterval) {
      this.interval = interval;
      this.getRedditMetric(1);
    },
    setModel(model: MetricModel) {
      this.model = model;
      this.getRedditMetric(1);
    },
    async getRedditMetric(page: Number) {
      if (this.subreddits.length > 0 && this.model !== undefined && this.interval != undefined) {
        try {
          if (this.cancellationToken !== undefined) {
            this.cancellationToken.cancel();
            this.cancellationToken = axios.CancelToken.source();
          }
          this.isLoading = true;
          const result = await axiosInstance.get<RedditMetric>('/api/redditMetric', {
            params: {
              model: this.model,
              subreddits: this.subreddits,
              interval: this.interval,
              page: page,
            },
            paramsSerializer: (params) => {
              return qs.stringify(params);
            },
            cancelToken: this.cancellationToken.token,
          });
          const metric = result.data;
          const entries = Object.values(metric.entries).slice(0, 100);
          console.log(this.page);
          // TODO: handle loading on first page
          if (metric.page === 1) {
            this.entries = entries;
          } else {
            this.entries.push(...entries);
          }
          this.page = metric.page + 1;
        } catch (err) {
          console.error(err);
        } finally {
          this.isLoading = false;
        }
      }
    },
  },
});
