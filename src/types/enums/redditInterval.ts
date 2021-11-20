import { DropdownItem } from '../dropdownItem';

export enum RedditInterval {
  Hour = 'Hour',
  Day = 'Day',
  Week = 'Week',
  // Month = 'Month',
  // Year = 'Year',
  // All = 'All',
}

export function redditIntervalToDropdownItem(redditInterval: RedditInterval): DropdownItem {
  return {
    label: redditInterval,
    value: redditInterval,
    image: '',
  };
}
