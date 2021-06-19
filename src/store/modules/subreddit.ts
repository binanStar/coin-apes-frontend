import { GetterTree, Module, Store as VuexStore } from 'vuex';
import { Subreddit } from '../../types/subreddit';
import { State as RootState } from '../index';

// Declare state
export type SubredditState = {
  subreddits: Array<Subreddit>;
};

// Create initial state
const initialState: SubredditState = {
  subreddits: [
    {
      name: 'r/CryptoCurrency',
      image:
        'https://styles.redditmedia.com/t5_2wlj3/styles/communityIcon_7jxh2j4ouky41.png?width=256&s=59ea46d93492e9d0951b43d7c580f72982a86974',
    },
    {
      name: 'r/CryptoMarkets',
      image: 'https://b.thumbs.redditmedia.com/JU-wLC9f1XJIRWiHlHls5GDMUcickAvpsS_NkyleyVc.png',
    },
    {
      name: 'r/CryptoMoonShoots',
      image:
        'https://styles.redditmedia.com/t5_9e4pv/styles/communityIcon_vsa30gnhaqn61.jpg?width=256&format=pjpg&s=fa73c36b089134a77f9e6fac5d07eda16b55933f',
    },
  ],
};

// Getters types
export type Getters = {
  allSubreddits(state: SubredditState): Array<Subreddit>;
};

// Getters
export const getters: GetterTree<SubredditState, RootState> & Getters = {
  allSubreddits: (storeState) => {
    return storeState.subreddits;
  },
};

// Setup store type
export type Store<S = SubredditState> = Omit<VuexStore<S>, 'getters'> & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const SubredditModule: Module<SubredditState, RootState> = {
  state: initialState,
  getters,
};
