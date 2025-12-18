<template>
  <MainLayout>
  <SectionIntro />
  </MainLayout>
  <AdvantageBlock />
  <AboutBlock />
</template>
<script setup lang="ts">
  import MainLayout from '@/layouts/main-layout/main-layout.vue';
  import SectionIntro from '@/components/section-intro/section-intro.vue';
  import AdvantageBlock from '@/components/advantage-block/advantage-block.vue';
  import AboutBlock from '@/components/about-block/about-block.vue';
</script>