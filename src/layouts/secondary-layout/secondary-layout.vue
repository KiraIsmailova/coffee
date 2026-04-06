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
    background: linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%);
  }

  .about {
    background: linear-gradient(180deg, #6f4e37 0%, #3e2723 50%, #1a120b 100%);
  }

  .contacts {
    background: linear-gradient(135deg, #5c3a21 0%, #3e2000 50%, #311900 100%);
  }
</style>
