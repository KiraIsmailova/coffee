<template>
  <SecondaryLayout>
    <AboutDescription />
  </SecondaryLayout>
  <QualityBlock />
  <CustomFooter />
</template>
<script setup lang="ts">
  import SecondaryLayout from '@/layouts/secondary-layout/secondary-layout.vue';
  import CustomFooter from '@/components/custom-footer/custom-footer.vue';
  import AboutDescription from '@/components/about-description/about-description.vue';
  import QualityBlock from '@/components/quality-block/quality-block.vue';
</script>
