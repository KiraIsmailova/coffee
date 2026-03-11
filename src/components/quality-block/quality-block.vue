<template>
  <div class="quality-block">
    <div class="custom-container">
      <h2 class="main-title">Why are we different?</h2>
      <p class="main-subtitle">We don’t just make your coffee, we make your day!</p>
      <div class="quality-block__card-group">
        <QualityCard
          v-for="(quality, index) in store.quality.quality"
          :key="index"
          :quality-card="quality"
        />
      </div>
      <p class="quality-block__join-text">We don’t just make your coffee, we make your day!</p>
      <h2 class="quality-block__join-title">Why are we different?</h2>
      <MainLink route="/menu" class="quality-block__join-link">
        <template #mainName> Join Us </template>
      </MainLink>
    </div>
    <div class="quality-block__right-wave">
      <img src="../../assets/images/right-coffee-wave.png" alt="coffee-wave" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import './quality-block.scss';
  import { onMounted } from 'vue';
  import QualityCard from '../quality-card/quality-card.vue';
  import { useQualityStore } from '@/stores/quality-store';
  import MainLink from '../main-link/main-link.vue';

  const store = {
    quality: useQualityStore(),
  };

  onMounted(() => {
    store.quality.fetchQuality();
  });
</script>
