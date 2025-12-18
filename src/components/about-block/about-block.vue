<template>
  <div class="about-block">
    <div class="custom-container">
      <h2 class="about-block__title">Enjoy a new blend of coffee style</h2>
      <p class="about-block__description">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
    </div>
  </div>
  <!-- <template 
    v-for="(card, index) in store.product"
    :key="index"> -->
    <!-- <CoffeeCard 
      :product-data="card"
    /> -->
  <!-- </template> -->

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