<script setup>
import { useData, withBase } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
// import { register } from 'swiper/element/bundle';
// register();

const { Layout } = DefaultTheme;
const { theme } = useData();

</script>

<template>
<Layout>
  <template #home-hero-actions-after>
    <div class="l-downloads" style="margin-top: 1rem; display: flex; gap: .5rem;">
      <a v-for="platform of theme.downloads"
        target="_blank"
        :href="platform.url" :key="platform.title">
        <img :src="withBase('assets/images/download/' + platform.image)" alt="iOS">
      </a>
    </div>
  </template>

<!--  <template #home-features-after>-->
<!--    <div style="margin-top: 2rem;" class="container">-->
<!--      <swiper-container>-->
<!--        <swiper-slide>Slide 1</swiper-slide>-->
<!--        <swiper-slide>Slide 2</swiper-slide>-->
<!--        <swiper-slide>Slide 3</swiper-slide>-->
<!--        ...-->
<!--      </swiper-container>-->
<!--    </div>-->
<!--  </template>-->
</Layout>
</template>

<style scoped>
@media (max-width: 991px) {
  .l-downloads {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
