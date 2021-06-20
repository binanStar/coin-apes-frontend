export interface MetricEntry {
  rank: Number;
  image: string;
  name: string;
  symbol: string;
  value: Number;
  valueAsPercentage: Number;
  dates: Array<Date>;
  sentiment: Number;
}
