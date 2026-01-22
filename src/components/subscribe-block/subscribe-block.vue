<template>
  <div class="subscribe-block">
    <div class="custom-container">
      <h2 class="main-title main-title--white">Subscribe to get the Latest News</h2>
      <p class="main-subtitle main-subtitle--white">Don’t miss out on our latest news, updates, tips and special offers</p>
      <div class="subscribe-block__btn-wrapper">
        <v-text-field
          :rules="rules"
          hide-details="auto"
          label="Enter your mail"
        />
        <CustomButton>
          <template #btnName>
            Suscribe
          </template>
        </CustomButton>
      </div>
    </div>
    <div class="subscribe-block__right-cup">
      <img src="../../assets/images/footer-cup-back-right.png" alt="cup-img">
    </div>
    <div class="subscribe-block__left-cup">
      <img src="../../assets/images/footer-cup-back-left.png" alt="cup-img">
    </div>
  </div>
</template>
<script setup lang="ts">
  import CustomButton from '../custom-button/custom-button.vue';
import './subscribe-block.scss';
  const rules = [
    (value: string | null) => !!value || 'Required.',
    (value: string | null) => (value && value.length >= 3) || 'Min 3 characters',
  ];
</script>