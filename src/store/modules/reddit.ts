import { Module, Store as VuexStore } from 'vuex';
import { State as RootState } from '../index';

// Declare state
export type RedditState = {};

// Create initial state
const initialState: RedditState = {};

// Setup store type
export type Store<S = RedditState> = Omit<VuexStore<S>, 'getters'>;

export const RedditModule: Module<RedditState, RootState> = {
  state: initialState,
};
