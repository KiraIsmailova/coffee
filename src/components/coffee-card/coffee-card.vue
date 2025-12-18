<template>
  <div class="product-card">
    <div class="product-card__inner">
      <img :src="productData.productCardImage" alt="productImage">
      <div class="product-card__description">
        <h4 class="product-card__description-title">
          {{ productData.productCardTitle }}
        </h4>
        <p class="product-card__description-text">
          {{ productData.productCardComposition }}
        </p>
        <p class="product-card__description-price">
          {{ productData.productCardPrice }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './coffee-card.scss';
  import { onMounted } from 'vue';
  import { useProductStore } from '@/stores/product-card-store';
import type { productCard } from '@/types/product-card-types';

  const store = {
    product: useProductStore(),
  }

  const props = defineProps<{
    productData: productCard;
  }>();

  onMounted(() => {
    store.product.fetchProducts();
  });
</script>