import { MetricModel } from './enums/metricModel';
import { RedditInterval } from './enums/redditInterval';
import { Subreddit } from './enums/subreddit';
import { MetricEntry } from './metricEntry';

export interface RedditMetric {
  model: MetricModel;
  subreddits: Array<Subreddit>;
  interval: RedditInterval;
  entries: { [key: string]: MetricEntry };
}
