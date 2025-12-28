<template>
  <div class="quality-card">
    <div class="quality-card__inner">
      <img :src="qualityCard?.qualityImage" alt="qualityImage">
      <div class="quality-card__description-wrap">
        <p class="quality-card__title">
          {{ qualityCard?.qualityTitle }}
        </p>
        <p class="quality-card__description">
          {{ qualityCard?.qualityDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './quality-card.scss';
  import type { QualityTypes } from '@/types/quality-types';

  defineProps<{
    qualityCard: QualityTypes;
  }>();
</script>