<template>
  <div class="container flex flex-col self-center items-center mx-6">
    <h1 class="text-h1 text-center mt-12">Support Coin Apes</h1>
    <p class="text-big mt-8 lg:mt-16 text-center">
      Currently, Coin Apes is maintained by a single person and the data collected is growing with
      each day. We would like to collect more data, from
      <span class="text-violet">more sources</span>
      (e.g. Twitter, YouTube, news, etc...) but for that, we need found to improve the current
      infrastructure and scale-up.
    </p>
    <br />
    <p class="text-big text-center">
      Every donation will go towards supporting the current infrastructure and investing in future
      features.
    </p>
    <br />
    <p class="text-big text-center">
      <span class="text-violet">DISCLAIMER:</span>
      It is possible that in the future Coin Apes will provide subscription based premium features.
      Every person that will donate until such features are ready, will get a FREE subscription
      based on their contribution. But please bear in mind that is a
      <span class="text-violet">possibility</span>
      not a
      <span class="text-violet">certainty</span>
    </p>
    <div class="flex flex-row mt-8 lg:mt-12 space-x-8">
      <img />
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="399NH5ZGD3HJC" />
        <input type="hidden" name="no_recurring" value="0" />
        <input type="hidden" name="item_name" value="Support Coin Apes" />
        <input type="hidden" name="currency_code" value="USD" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
    <div class="flex flex-col lg:flex-row lg:space-x-16 xl:space-x-32 mb-8 mt-6 lg:mt-16">
      <DonationCard
        :title="'Bitcoin'"
        :icon="'@/assets/btc.png'"
        :address="'12GQ5kabL17JLsdTBuJVF3LoqDzBF1M9mQ'"
        :qr="'@/assets/btcqr.jpeg'"
      ></DonationCard>
      <DonationCard
        class="mt-6 lg:mt-0"
        :title="'Ethereum'"
        :icon="'@/assets/eth.png'"
        :address="'0x25c54f89da2cd617151e515aeb65fff83b8b00b2'"
        :qr="'@/assets/ethqr.png'"
      ></DonationCard>

      <DonationCard
        class="mt-6 lg:mt-0"
        :title="'elrond'"
        :icon="'@/assets/egld.png'"
        :address="'erd1ttf0fx4t4hj6f8vkvwvhsfglr5s0qutyvl0qw3fz50mn7mnzkszqcmufrs'"
        :qr="'@/assets/egldqr.png'"
      ></DonationCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import DonationCard from '../components/DonationCard.vue';

export default defineComponent({
  components: {
    DonationCard,
  },
});
</script>

<style>
</style>