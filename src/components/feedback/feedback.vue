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
        >
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
            <div class="feedback__swiper-text">
              <p class="feedback__quote">{{ slide.text }}</p>
              <p class="feedback__user-name">{{ slide.userName }}</p>
              <p class="feedback__profession">{{ slide.profession }}</p>
            </div>
          </SwiperSlide>
          <Quotes class="feedback__quotes-icon"/>
        </Swiper>
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
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css';
  import Quotes from "@/assets/svg/quotes.svg";
  import { ref } from 'vue';
  import type { Swiper as SwiperClass } from 'swiper';
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper/modules'; 

  const currentSlide = ref<SwiperClass | null>(null);

  function onSwiperInit(swiper: SwiperClass) {
    currentSlide.value = swiper;
  }

  const scrollToNext = () => {
    if (currentSlide?.value) {
      currentSlide?.value?.slideNext();
    }
  }

  const slides = [
    { 
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
      userName: 'Jonny Thomas',
      profession: 'Project Manager',
    },
    { 
      text: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
      userName: '222',
      profession: '212', 
    },
    { 
      text: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset', 
      userName: '333',
      profession: '313', 
    },
  ];
</script>