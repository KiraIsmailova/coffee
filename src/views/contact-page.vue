<template>
  <SecondaryLayout>
    <ContactsMain />
  </SecondaryLayout>
  <CustomFooter />
</template>
<script setup lang="ts">
  import SecondaryLayout from '@/layouts/secondary-layout/secondary-layout.vue';
  import CustomFooter from '@/components/custom-footer/custom-footer.vue';
  import ContactsMain from '@/components/contacts-main/contacts-main.vue';
</script>
