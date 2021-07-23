<template>
  <div class="container flex flex-col items-center self-center">
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
            :image="'src/assets/mail.svg'"
          ></ContactDetail>
          <ContactDetail
            :text="'Lucian Eduard Ghimpu'"
            :link="'https://github.com/GhimpuLucianEduard'"
            :image="'src/assets/github.svg'"
          ></ContactDetail>
          <ContactDetail
            :text="'Lucian Eduard Ghimpu'"
            :link="'https://www.linkedin.com/in/lucian-eduard-ghimpu-21b33b131/'"
            :image="'src/assets/linkedin.svg'"
          ></ContactDetail>
        </div>
      </div>
      <img
        src="src/assets/aboutimage.svg"
        class="w-[320px] h-[268px] lg:w-[462px] lg:h-[387px] mt-12 lg:mt-0 md:ml-auto lg:mr-[112px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactDetail from '../components/ContactDetail.vue';

export default defineComponent({
  components: {
    ContactDetail,
  },
});
</script>

<style scoped>
</style>