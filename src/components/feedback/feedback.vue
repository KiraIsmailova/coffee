<template>
  <div class="feedback">
    <div class="custom-container">
      <h2 class="main-title">Our coffee perfection feedback</h2>
      <p class="main-subtitle">Our customers has amazing things to say about us</p>
      
      <div class="feedback__swiper-back">
        <button class="feedback__btn-prev custom-swiper-button-prev">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9V16L0 8L8 0V7H16V9H8Z" fill="#603809"/>
          </svg>
        </button>
        <button class="feedback__btn-next custom-swiper-button-next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9V16L16 8L8 0V7H0V9H8Z" fill="#603809"/>
          </svg>
        </button>
        <Swiper
          :slides-per-view="1"
          :space-between="20"
          class="feedback__swiper"
          :modules="[Navigation]"
          :navigation="{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev'
          }"
          @slideChange="changeIndexSlide"
        >
          <SwiperSlide 
            v-for="(slide, idx) in store.quotes.result" 
            :key="idx"
            >
            <div class="feedback__swiper-text">
              <p class="feedback__quote">{{ slide.quote }}</p>
              <p class="feedback__user-name">{{ slide.userName }}</p>
              <p class="feedback__profession">{{ slide.profession }}</p>
            </div>
          </SwiperSlide>
          <Quotes class="feedback__quotes-icon"/>
        </Swiper>
        <div class="feedback__avatar-container">
          <img
            v-if="store.quotes.result[currentIndex]"
            :src="store.quotes.result[currentIndex]?.avatar"
            alt="avatar"
          />
        </div>
      </div>
    </div>
    <div class="feedback__right-wave">
      <img src="../../assets/images/right-coffee-wave.png" alt="coffee-wave">
    </div>
    <div class="feedback__left-wave">
      <img src="../../assets/images/left-coffee-wave.png" alt="coffee-wave">
    </div>
  </div>
</template>
<script setup lang="ts">
  import './feedback.scss';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import type { Swiper as SwiperType } from 'swiper';
  import Quotes from "@/assets/svg/quotes.svg";
  import { onMounted, ref } from 'vue';
  import { Navigation } from 'swiper/modules'; 
  import { useQuotesStore } from '@/stores/quotes-store';

  const currentIndex = ref(0);

  const changeIndexSlide = (swiper: SwiperType) => {
    currentIndex.value = swiper.activeIndex;
  }

  const store = {
    quotes: useQuotesStore(),
  }

  onMounted(() => {
    store.quotes.fetchQuotes();
  });

</script>