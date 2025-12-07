<template>
  <div class="section-intro">
    <div class="custom-container">
      <div class="section-intro__inner">
        <p class="section-intro__pre-title">We’ve got your morning covered with</p>
        <h1 class="section-intro__title">Coffee</h1>
        <p class="section-intro__post-title">It is best to start your day with a cup of coffee. Discover the
          best flavours coffee you will ever have. We provide the best
          for our customers.
        </p>
      </div>
      <div>
        <MainLink route="/menu">
          <template #mainName>
            Order Now
          </template>
        </MainLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './section-intro.scss';
  import MainLink from '../main-link/main-link.vue';
</script>