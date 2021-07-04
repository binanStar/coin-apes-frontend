import { FrequencyKeyValuePair } from './frequencyKeyValuePair';

export interface MetricEntry {
  id: string;
  rank: number;
  image: string;
  name: string;
  symbol: string;
  value: number;
  valueAsPercentage: number;
  frequency: Array<FrequencyKeyValuePair>;
  sentiment: number;
}
