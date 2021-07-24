import { ref, watch, computed } from 'vue';
import { useCookie } from 'vue-cookie-next';
const allowCookies = ref<boolean>();

export default function useCookies(gtag: any) {
  const cookie = useCookie();

  if (cookie.isCookieAvailable('coin_apes_cookies_consent')) {
    allowCookies.value = cookie.getCookie('coin_apes_cookies_consent') === 'true';
    gtag.optIn();
  } else {
    allowCookies.value = undefined;
  }

  watch(allowCookies, () => {
    if (allowCookies.value != undefined) {
      cookie.setCookie('coin_apes_cookies_consent', allowCookies.value.toString(), {
        expire: new Date(2025, 1, 1),
      });
      if (allowCookies.value) {
        gtag.optIn();
      } else {
        gtag.optOut();
      }
    }
  });

  const showBanner = computed(() => {
    return allowCookies.value === undefined;
  });

  const okClicked = () => (allowCookies.value = true);

  return {
    allowCookies,
    showBanner,
    okClicked,
  };
}
