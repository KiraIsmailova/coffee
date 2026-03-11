<template>
  <div class="sign-buttons">
    <div class="sign-buttons__sign">
      <ul class="sign-buttons__sign-list">
        <li class="sign-buttons__sign-in">
          <router-link to="/signIn" class="sign-buttons__sign-link"> Sign In </router-link>
        </li>
        <li class="sign-buttons__sign-up">
          <router-link to="/signUp" class="sign-buttons__sign-link"> SingUp </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import './sign-buttons.scss';
</script>
