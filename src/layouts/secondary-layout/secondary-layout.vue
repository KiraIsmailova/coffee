<template>
  <div :class="layoutClass">
    <customHeader />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import customHeader from '@/components/custom-header/custom-header.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isMenuPage = computed(() => route.meta.menuPage === true);

const layoutClass = computed(() => ({
  'menu': isMenuPage.value
}));
</script>

<style lang="scss">
  .menu {
    background-color: black;
  }
</style>