import 'pinia';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    toast: any;
  }
}
