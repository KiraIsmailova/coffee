<template>
  <div class="subscribe-block">
    <div class="custom-container">
      <h2 class="main-title main-title--white">Subscribe to get the Latest News</h2>
      <p class="main-subtitle main-subtitle--white">Don’t miss out on our latest news, updates, tips and special offers</p>
      <div class="subscribe-block__btn-wrapper">
        <v-text-field
          :rules="rules"
          hide-details="auto"
          label="Main input"
        />
        <p>test</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './subscribe-block.scss';
  const rules = [
    (value: string | null) => !!value || 'Required.',
    (value: string | null) => (value && value.length >= 3) || 'Min 3 characters',
  ];
</script>