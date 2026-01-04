import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { QuotesTypes } from '@/types/quotes-types';

export const useQuotesStore = defineStore('quotes-store', () => {
  const result = ref<QuotesTypes>
})
