<template>
  <div class="coffee-offer-block">
    <div class="custom-container">
      <div class="coffee-offer-block__inner">
        <div class="coffee-offer-block__description">
          <h2 class="coffee-offer-block__title">Get a chance to have an Amazing morning</h2>
          <p class="coffee-offer-block__text">We are giving you are one time opportunity to 
            experience a better life with coffee.</p>
            <MainLink route="/">
              <template #mainName>
                Order Now
              </template>
            </MainLink>
        </div>
        <div>
          <img class="coffee-offer-block__paper-cup" src="../../assets/images/paper-cup.png" alt="paper-cup">
        </div>
      </div>
    </div>
    <div class="coffee-offer-block__coffee-beans">
      <img src="../../assets/images/coffee-beans.png" alt="coffee-beans">
    </div>
  </div>
</template>
<script setup lang="ts">
  import MainLink from '../main-link/main-link.vue';
import './coffee-offer-block.scss';
</script>