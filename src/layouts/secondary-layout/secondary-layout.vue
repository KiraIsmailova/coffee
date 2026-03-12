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

  const layoutClass = computed(() => {
    const meta = route.meta;
    return {
      menu: !!meta.menuPage,
      contacts: !!meta.contactsPage,
      about: !!meta.aboutPage,
    };
  });
</script>

<style lang="scss">
  .menu {
    background-color: black;
  }

  .contacts {
    background-color: #311900;
  }

  .about {
    background-color: #653602;
  }
</style>
