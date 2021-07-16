import { defineStore } from 'pinia';
import axiosInstance from '../composable/axiosInstance';
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
  query: string;
  page: number;
  fetchingPage: number;
  isLoading: boolean;
  cancellationToken: CancelTokenSource;
  canFetchMore: boolean;
};

export const useStore = defineStore({
  id: 'coinApesStore',
  state: () =>
    ({
      entries: new Array<MetricEntry>(),
      subreddits: [],
      interval: undefined,
      model: undefined,
      query: '',
      page: 1,
      isLoading: false,
      fetchingPage: 2,
      cancellationToken: axios.CancelToken.source(),
      canFetchMore: true,
    } as RootState),
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
    setQuery(query: string) {
      this.query = query;
      this.getRedditMetric(1);
    },
    async getRedditMetric(page: number) {
      if (this.subreddits.length > 0 && this.model !== undefined && this.interval != undefined) {
        try {
          if (this.cancellationToken !== undefined) {
            this.cancellationToken.cancel();
            this.cancellationToken = axios.CancelToken.source();
          }

          this.fetchingPage = page;

          if (page === 1) {
            this.canFetchMore = true;
            this.page === 1;
          }

          const result = await axiosInstance.get<RedditMetric>('/api/redditMetric', {
            params: {
              model: this.model,
              subreddits: this.subreddits,
              interval: this.interval,
              query: this.query,
              page: page,
            },
            paramsSerializer: (params) => {
              return qs.stringify(params);
            },
            cancelToken: this.cancellationToken.token,
          });
          const metric = result.data;
          const entries = Object.values(metric.entries);

          if (metric.page === 1) {
            this.entries = entries;
          } else {
            this.entries.push(...entries);
          }
          this.page = metric.page + 1;

          if (entries.length < 50) {
            this.canFetchMore = false;
          }
          console.log(this._vm);
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
});
