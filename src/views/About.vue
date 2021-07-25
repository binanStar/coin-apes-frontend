<template>
  <div class="container flex flex-col items-center self-center mb-16">
    <h1 class="text-h1 mt-12">About Coin Apes</h1>
    <div class="container flex flex-col items-center md:flex-row mt-12 md:mt-24 ml-6 mr-6">
      <div class="flex flex-col items-center">
        <p class="text-big text-center w-80 lg:w-[540px]">
          Coin Apes is a
          <span class="text-violet">data aggregator</span>
          that collects data from social media platforms in order to provide more insight into
          cryptocurrency trends.
        </p>
        <div class="flex flex-col mt-12 md:mt-24 space-y-4">
          <ContactDetail
            :text="'coinapes.contact@gmail.com'"
            :link="'mailto:coinapes.contact@gmail.com'"
            :image="assets.mail"
          ></ContactDetail>
          <ContactDetail
            :text="'Lucian Eduard Ghimpu'"
            :link="'https://github.com/GhimpuLucianEduard'"
            :image="assets.github"
          ></ContactDetail>
          <ContactDetail
            :text="'Lucian Eduard Ghimpu'"
            :link="'https://www.linkedin.com/in/lucian-eduard-ghimpu-21b33b131/'"
            :image="assets.linkedin"
          ></ContactDetail>
        </div>
      </div>
      <img
        :src="assets.aboutImage"
        class="w-[320px] h-[268px] lg:w-[462px] lg:h-[387px] mt-12 lg:mt-0 md:ml-auto lg:mr-[112px]"
      />
    </div>
    <div class="container flex flex-col mt-9 lg:mt-24 lg:pl-28 md:pr-4">
      <p class="text-white font-medium self-center lg:self-start text-3xl lg:text-4xl lg:mb-6">
        FAQ
      </p>
      <p class="question">🕒 How often is the data updated?</p>
      <p class="ans">
        Our server constantly works to provide the latest data. Currently, the data is updated based
        on the interval:
        <br />
        Hour - every 20 minutes
        <br />
        Day - every hour
        <br />
        Week, Month, Year, All - every day
        <br />
        The rest of the data (coins and exchanges) are also updated every day.
      </p>
      <p class="question mt-6">📈 Why only r/Cryptocurrency and r/CryptoMarkets</p>
      <p class="ans">
        These two subreddits are coin-agnostic, so they provide an objective view of the crypto
        world. Fun fact: initially we also included r/CryptoMoonShots but that subreddit it's quite
        a clown fiesta and we decided to ignore it for the time being.
      </p>
      <p class="question mt-6">❤️ How reliable is the sentiment analysis?</p>
      <p class="ans">
        This feature is still in beta. At the moment we are using a tweaked social medial sentiment
        analysis but we are trying to improve it by creating a lexicon that is based on the crypto
        world.
      </p>
      <p class="question mt-6">🔒 Why the project is not open source?</p>
      <p class="ans">
        For the time being the project will not be open source, at least the backend part. We are
        concerned about some security hotspots. That being said, it is possible that in the future
        the project will become open source.
      </p>
      <p class="question mt-6">🌐 Is there a public API for the data?</p>
      <p class="ans">Not at the moment, but it is planned.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import ContactDetail from '../components/ContactDetail.vue';
import useAssets from '../composable/useAssets';

export default defineComponent({
  components: {
    ContactDetail,
  },
  setup() {
    var assets = useAssets();
    return {
      assets,
    };
  },
});
</script>

<style lang="postcss" scoped>
.question {
  @apply text-white font-medium text-xl lg:text-2xl text-center md:text-left mt-4;
}

.ans {
  @apply text-white text-sm mt-4 lg:text-base md:ml-10;
}
</style>