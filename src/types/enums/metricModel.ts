import { DropdownItem } from '../dropdownItem';

export enum MetricModel {
  Coin = 'Coin',
  Exchange = 'Exchange',
  Item = 'Item',
}

export const MetricModelIcon = new Map<MetricModel, string>([
  [MetricModel.Coin, '@/assets/coins.svg'],
  [MetricModel.Exchange, '@/assets/exchanges.svg'],
  [MetricModel.Item, '@/assets/misc.svg'],
]);

export const MetricModelLabel = new Map<MetricModel, string>([
  [MetricModel.Coin, 'Coins'],
  [MetricModel.Exchange, 'Exchanges'],
  [MetricModel.Item, 'Miscellaneous'],
]);

export function metricModelToDropdownItem(metricModel: MetricModel): DropdownItem {
  return {
    label: MetricModelLabel.get(metricModel) ?? '',
    value: metricModel,
    image: MetricModelIcon.get(metricModel) ?? '',
  };
}
