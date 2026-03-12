<template>
  <div :class="layoutClass">
    <customHeader />
    <main>
      <slot></slot>
    </main>
  </div>
  <!-- https://www.figma.com/design/cZ6624xMOYpwpAfjSp71Uf/Bean-Scene-Coffee-Landingpage--Community-?node-id=0-1&p=f&t=nw2Fg2J7YvOQ73R9-0 -->
</template>
<script setup lang="ts">
  import customHeader from '@/components/custom-header/custom-header.vue';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const isGeneralBack = computed(() => route.meta.generalBackground === true);

  const layoutClass = computed(() => ({
    main: isGeneralBack.value,
  }));
</script>

<style lang="scss">
  .main {
    background-image: url('@/assets/images/bg-image.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);

    @media (max-width: 744px) {
      box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
    }
  }
</style>
