<script setup lang="ts">
const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
</script>

<template>
    <YorhaLoader v-if="currentTheme === 'yorha'" />
</template>