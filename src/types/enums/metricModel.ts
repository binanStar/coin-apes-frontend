import useAssets from '../../composable/useAssets';
import { DropdownItem } from '../dropdownItem';

const assets = useAssets();

export enum MetricModel {
  Coin = 'Coin',
  Exchange = 'Exchange',
  Item = 'Item',
}

export const MetricModelIcon = new Map<MetricModel, string>([
  [MetricModel.Coin, assets.coins],
  [MetricModel.Exchange, assets.exchanges],
  [MetricModel.Item, assets.misc],
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
