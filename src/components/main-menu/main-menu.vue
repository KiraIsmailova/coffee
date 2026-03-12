<template>
  <div class="main-menu">
    <div class="custom-container">
      <h3 class="main-title">Main coffee menu</h3>
      <p class="main-subtitle">
        Explore all flavours of coffee with us. There is always a new cup worth experiencing
      </p>
      <div class="main-menu__list">
        <CoffeeCard
          v-for="(card, index) in store.product.products"
          :key="index"
          :product-data="card"
        />
      </div>
    </div>
    <div class="main-menu__image">
      <img src="/src/assets/images/footer-cup-back-right.png" alt="cup-img" />
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
