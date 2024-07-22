<script setup lang="ts">
const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
</script>

<template>
    <YorhaNavigation v-if="currentTheme === 'yorha'" />
</template>