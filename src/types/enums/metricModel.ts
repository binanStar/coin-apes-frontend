import { DropdownItem } from '../dropdownItem';

export enum MetricModel {
  Coin = 'Coins',
  Exchange = 'Exchanges',
  Item = 'Misc',
}

export function metricModelToDropdownItem(metricModel: MetricModel): DropdownItem {
  return {
    label: metricModel,
    value: metricModel,
    image: '',
  };
}
