import { DropdownItem } from '../dropdownItem';

export enum ResultsViewType {
  Grid = 'Grid',
  PieChart = 'Pie Chart',
}

export function resultsViewTypeToDropdownItem(resultsViewType: ResultsViewType): DropdownItem {
  return {
    label: resultsViewType,
    value: resultsViewType,
    image: '',
  };
}
