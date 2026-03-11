<template>
  <nav class="custom-nav">
    <ul class="custom-nav__list">
      <li class="custom-nav__li">
        <router-link to="/" class="custom-nav__link">Home</router-link>
      </li>
      <li class="custom-nav__li">
        <router-link to="/menu" class="custom-nav__link">Menu</router-link>
      </li>
      <li class="custom-nav__li">
        <router-link to="/about" class="custom-nav__link">About us</router-link>
      </li>
      <li class="custom-nav__li">
        <router-link to="/contacts" class="custom-nav__link">Contacts</router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
  import './custom-nav.scss';
</script>
