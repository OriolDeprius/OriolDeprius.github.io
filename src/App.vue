<script setup>
import componentHeader from './components/component-header.vue'
import ComponentFooter from './components/component-footer.vue'
import ScrollTop from 'primevue/scrolltop';

</script>

<template>
  <componentHeader />
  <ScrollTop :threshold="200" />
  <div class="h-screen"></div>
  <ComponentFooter />
</template>

<style scoped></style>
