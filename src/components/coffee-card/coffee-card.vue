<template>
  <div class="product-card">
    <div class="product-card__inner">
      <img :src="productData?.productCardImage" alt="productImage">
      <div class="product-card__description">
        <h4 class="product-card__description-title">
          {{ productData?.productCardTitle }}
        </h4>
        <p class="product-card__description-text">
          {{ productData?.productCardComposition }}
        </p>
        <p class="product-card__description-price">
          {{ '$' + productData?.productCardPrice }}
        </p>
        <div class="product-card__order">
          <MainLink route="/menu">
            <template #mainName>
              Order Now
            </template>
          </MainLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './coffee-card.scss';
  import type { productCard } from '@/types/product-card-types';
  import MainLink from '../main-link/main-link.vue';

  defineProps<{
    productData: productCard;
  }>();

</script>