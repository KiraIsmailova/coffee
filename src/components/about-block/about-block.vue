<template>
  <div class="about-block">
    <div class="custom-container">
      <h2 class="main-title">Enjoy a new blend of coffee style</h2>
      <p class="main-subtitle">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
      <div class="about-block__card-wrapper">
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
  import './about-block.scss';
  import { onMounted } from 'vue';
  import CoffeeCard from '@/components/coffee-card/coffee-card.vue';
  import { useProductStore } from '@/stores/product-card-store';

  const store = {
    product: useProductStore(),
  }

  onMounted(() => {
    store.product.fetchProducts();
  });
</script>