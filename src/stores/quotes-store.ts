import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { QuotesTypes } from '@/types/quotes-types';

export const useQuotesStore = defineStore('quotes-store', () => {
  const result = ref<QuotesTypes[]>([]);
  const error = ref<string | null>(null);

  const fetchQuotes = async () => {
    error.value = null;

    try {
      const res = await fetch('/mock-data-quotes.json', {
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: не удалось загрузить отзывы`);
      }
      const data = await res.json();
      result.value = data as QuotesTypes[];
    } catch (err) {
      error.value = (err as Error).message;
      console.error('Ошибка загрузки данных:', err);
    }
  };

  return {
    result,
    error,
    fetchQuotes,
  };
});
