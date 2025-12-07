<template>
  <router-link :to="route" class="main-link">
    <slot name="mainName"></slot>
  </router-link>
</template>
<script setup lang="ts">
  import './main-link.scss';

  const props = defineProps({
    route: {
      type: String,
      required: true
    }
  })
</script>