<template>
  <div class="main-menu">
    <div class="custom-container">
      <h3 class="main-title">Main coffee menu</h3>
      <div class="main-menu__list">
        <CoffeeCard
          v-for="(card, index) in store.product.products"
          :key="index"
          :product-data="card"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './main-menu.scss';
  import CoffeeCard from '../coffee-card/coffee-card.vue';
  import { onMounted } from 'vue';
  import { useProductStore } from '@/stores/product-card-store';

  const store = {
    product: useProductStore(),
  };

  onMounted(() => {
    store.product.fetchProducts();
  });
</script>
