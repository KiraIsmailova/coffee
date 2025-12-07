<template>
  <div class="header">
    <div class="custom-container">
      <div class="header__inner">
        <RouterLink to="/">
          <img src="../../assets/images/main-logo.png" alt="main-logo">
        </RouterLink>
        <CustomNav />
        <SignButtons />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './custom-header.scss';
  import CustomNav from '../custom-nav/custom-nav.vue';
  import SignButtons from '../sign-buttons/sign-buttons.vue';
</script>