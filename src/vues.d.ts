import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { RootState } from './store';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
