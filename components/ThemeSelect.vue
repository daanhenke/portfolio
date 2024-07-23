<script setup lang="ts">
const themes = [
    { key: 'yorha', label: 'YoRHa' },
    { key: 'tarot', label: 'Mementos' },
];

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
</script>

<template>
    <Select v-model="currentTheme" placeholder="Theme" :items="themes" />
</template>