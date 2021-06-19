import { createStore } from 'vuex';
import { RedditState, RedditModule, Store as SubredditStore } from './modules/reddit';

export type State = {
  reddit: RedditState;
};

export type Store = SubredditStore<Pick<State, 'reddit'>>;

export const store = createStore({
  modules: {
    RedditModule,
  },
});

export function useStore(): Store {
  return store as Store;
}

export default store;
