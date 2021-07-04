import { DropdownItem } from '../dropdownItem';

export enum Subreddit {
  CryptoCurrency = 'CryptoCurrency',
  CryptoMarkets = 'CryptoMarkets',
  CryptoMoonShots = 'CryptoMoonShots',
}

export const SubredditIcon = new Map<Subreddit, string>([
  [
    Subreddit.CryptoCurrency,
    'https://styles.redditmedia.com/t5_2wlj3/styles/communityIcon_7jxh2j4ouky41.png?width=256&s=59ea46d93492e9d0951b43d7c580f72982a86974',
  ],
  [
    Subreddit.CryptoMarkets,
    'https://b.thumbs.redditmedia.com/JU-wLC9f1XJIRWiHlHls5GDMUcickAvpsS_NkyleyVc.png',
  ],
  [
    Subreddit.CryptoMoonShots,
    'https://styles.redditmedia.com/t5_9e4pv/styles/communityIcon_vsa30gnhaqn61.jpg?width=256&format=pjpg&s=fa73c36b089134a77f9e6fac5d07eda16b55933f',
  ],
]);

export function subredditToDropdownItem(subreddit: Subreddit): DropdownItem {
  return {
    label: `/r/${subreddit}`,
    value: subreddit,
    image: SubredditIcon.get(subreddit) ?? '',
  };
}

export function getEnumKeyByEnumValue(myEnum: any, enumValue: number | string): string {
  let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : '';
}
