import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { productCard } from '@/types/product-card-types';

export const useProductStore = defineStore('product-card-store', () => {
  const products = ref<productCard[]>([]);
  const error = ref<string | null>(null);

  const fetchProducts = async () => {
    error.value = null;

    try {
      const res = await fetch('/mock-data-product.json', {
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: не удалось загрузить товары`);
      }
      const data = await res.json();
      products.value = data as productCard[];
    } catch (err) {
      error.value = (err as Error).message;
      console.error('Ошибка загрузки данных:', err);
    } 
  };

  return {
    products,
    error,
    fetchProducts,
  };
});