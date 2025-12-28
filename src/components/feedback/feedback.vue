<template>
  <div class="feedback">
    <div class="custom-container">
      <h2 class="main-title">Our coffee perfection feedback</h2>
      <p class="main-subtitle">Our customers has amazing things to say about us</p>
      <div class="feedback__swiper-back">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :space-between="20"
          navigation
          class="feedback__swiper"
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
  </div>
</template>
<script setup lang="ts">
  import './feedback.scss';
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import Quotes from "@/assets/svg/quotes.svg";

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