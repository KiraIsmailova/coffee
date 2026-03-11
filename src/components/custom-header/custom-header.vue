<template>
  <div class="header">
    <div class="custom-container">
      <div class="header__inner">
        <RouterLink to="/">
          <img src="../../assets/images/main-logo.png" alt="main-logo" />
        </RouterLink>
        <CustomNav class="custom-nav--mob" />
        <SignButtons />
        <button
          class="header__burger"
          :class="{ 'header__burger--active': isMenuOpen }"
          aria-label="Открыть меню"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <Teleport to="body">
      <transition name="slide-fade">
        <div v-if="isMenuOpen" class="mobile-menu-overlay" @click="closeMenu">
          <div class="mobile-menu" @click.stop>
            <div class="mobile-menu__close" @click="closeMenu">
              <span></span>
              <span></span>
            </div>
            <div class="mobile-menu__inner">
              <RouterLink to="/" class="mobile-menu__logo">
                <img src="../../assets/images/main-logo.png" alt="main-logo" />
              </RouterLink>
              <div class="mobile-menu__content">
                <CustomNav class="custom-nav custom-nav--burger" @click="closeMenu" />
                <SignButtons class="sign-buttons sign-buttons--burger" @click="closeMenu" />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import './custom-header.scss';
  import CustomNav from '../custom-nav/custom-nav.vue';
  import SignButtons from '../sign-buttons/sign-buttons.vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  };
</script>
