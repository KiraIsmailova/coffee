import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { QualityTypes } from '@/types/quality-types';

export const useQualityStore = defineStore('quality-store', () => {
  const quality = ref<QualityTypes[]>([]);
  const error = ref<string | null>(null);

  const fetchQuality = async () => {
    error.value = null;

    try {
      const res = await fetch('/mock-data-quality.json', {
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: не удалось загрузить преимущества`);
      }
      const data = await res.json();
      quality.value = data as QualityTypes[];
    } catch (err) {
      error.value = (err as Error).message;
      console.error('Ошибка загрузки данных:', err);
    } 
  };

  return {
    quality,
    error,
    fetchQuality,
  };
});