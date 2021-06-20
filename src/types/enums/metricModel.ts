import { DropdownItem } from '../dropdownItem';

export enum MetricModel {
  Coin = 'Coins',
  Exchange = 'Exchanges',
  Item = 'Miscellaneous',
}

export const MetricModelIcon = new Map<MetricModel, string>([
  [MetricModel.Coin, 'src/assets/coins.svg'],
  [MetricModel.Exchange, 'src/assets/exchanges.svg'],
  [MetricModel.Item, 'src/assets/misc.svg'],
]);

export function metricModelToDropdownItem(metricModel: MetricModel): DropdownItem {
  return {
    label: metricModel,
    value: metricModel,
    image: MetricModelIcon.get(metricModel) ?? '',
  };
}
