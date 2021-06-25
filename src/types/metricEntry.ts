export interface MetricEntry {
  id: string;
  rank: number;
  image: string;
  name: string;
  symbol: string;
  value: number;
  valueAsPercentage: number;
  dates: Array<Date>;
  sentiment: number;
}
