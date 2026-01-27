<template>
  <div class="advantage-block">
    <div class="custom-container">
      <div class="advantage-block__inner">
        <div class="advantage-block__text">
          <h2  class="main-title">Discover the best coffee</h2>
          <p class="main-subtitle">Bean Scene is a coffee shop that provides 
            you with quality coffee that helps boost your productivity and helps build your mood. 
            Having a cup of coffee is good, but having a cup of real coffee is greater. 
            There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            <MainLink route="/menu">
              <template #mainName>
                Learn More
              </template>
            </MainLink>
        </div>
        <div class="advantage-block__image">
          <img src="../../assets/images/cup-of-coffee.png" alt="cup">
        </div>
      </div>
    </div>
    <div class="advantage-block__left-wave">
      <img src="../../assets/images/left-coffee-wave.png" alt="coffee-wave">
    </div>
  </div>
</template>
<script setup lang="ts">
  import './advantage-block.scss';
  import MainLink from '../main-link/main-link.vue';
</script>