import { createStore } from 'vuex';
import { SubredditState, SubredditModule, Store as SubredditStore } from './modules/subreddit';

export type State = {
  subreddit: SubredditState;
};

export type Store = SubredditStore<Pick<State, 'subreddit'>>;

export const store = createStore({
  modules: {
    SubredditModule,
  },
});

export function useStore(): Store {
  return store as Store;
}

export default store;
