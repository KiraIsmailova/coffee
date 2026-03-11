<template>
  <div class="custom-footer">
    <div class="custom-container">
      <div class="custom-footer__inner">
        <div class="custom-footer__text-block">
          <h4 class="custom-footer__title">Bean Scene</h4>
          <p class="custom-footer__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div>
            <ul class="custom-footer__social-list">
              <li>
                <a href="#"><SocialFb /></a>
              </li>
              <li>
                <a href="#"><SocialIg /></a>
              </li>
              <li>
                <a href="#"><SocialYt /></a>
              </li>
              <li>
                <a href="#"><SocialTw /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="custom-footer__about-wrap">
          <div class="custom-footer__about">
            <p class="custom-footer__subtitle">About</p>
            <ul class="custom-footer__list">
              <li>Menu</li>
              <li>Features</li>
              <li>News & Blogs</li>
              <li>Help & Supports</li>
            </ul>
          </div>
          <div class="custom-footer__about">
            <p class="custom-footer__subtitle">Company</p>
            <ul class="custom-footer__list">
              <li>How we work</li>
              <li>Terms of service</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div class="custom-footer__about">
            <p class="custom-footer__subtitle">Contact Us</p>
            <ul class="custom-footer__list">
              <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
              <li>+1 202-918-2132</li>
              <li>beanscene@mail.com</li>
              <li>www.beanscene.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './custom-footer.scss';
  import SocialFb from '@/assets/svg/social-fb.svg';
  import SocialIg from '@/assets/svg/social-ig.svg';
  import SocialYt from '@/assets/svg/social-yt.svg';
  import SocialTw from '@/assets/svg/social-tw.svg';
</script>
