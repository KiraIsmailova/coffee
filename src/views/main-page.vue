<template>
  <MainLayout>
  <SectionIntro />
  </MainLayout>
  <AdvantageBlock />
  <AboutBlock />
  <QualityBlock />
  <CoffeeOfferBlock />
  <Feedback />
</template>
<script setup lang="ts">
  import MainLayout from '@/layouts/main-layout/main-layout.vue';
  import SectionIntro from '@/components/section-intro/section-intro.vue';
  import AdvantageBlock from '@/components/advantage-block/advantage-block.vue';
  import AboutBlock from '@/components/about-block/about-block.vue';
  import QualityBlock from '@/components/quality-block/quality-block.vue';
import CoffeeOfferBlock from '@/components/coffee-offer-block/coffee-offer-block.vue';
import Feedback from '@/components/feedback/feedback.vue';
</script>