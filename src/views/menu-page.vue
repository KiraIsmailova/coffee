<template>
  <SecondaryLayout>
    <MenuDescription />
  </SecondaryLayout>
  <MainMenu />
  <CustomFooter />
</template>
<script setup lang="ts">
  import MainMenu from '@/components/main-menu/main-menu.vue';
  import MenuDescription from '@/components/menu-description/menu-description.vue';
  import SecondaryLayout from '@/layouts/secondary-layout/secondary-layout.vue';
  import CustomFooter from '@/components/custom-footer/custom-footer.vue';
</script>
