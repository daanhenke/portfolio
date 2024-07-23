<script setup lang="ts">
import '@unocss/reset/tailwind.css';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
</script>

<template>
  <Head>
    <Title>jwt - daan.vodka</Title>
  </Head>
  <div :class="`theme-${currentTheme} layout`">
    <Navigation />
    <NuxtPage />
  </div>
  <Loader />
</template>

<style scoped>
.layout {
  @apply min-h-screen;
}
</style>