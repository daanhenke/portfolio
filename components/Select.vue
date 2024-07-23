<script setup lang="ts">
const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

const props = defineProps<{
    placeholder?: string,
    items: {
        key: string,
        label: string
    }[]
}>()

const activeKey = defineModel();

</script>

<template>
    <YorhaSelect v-if="currentTheme === 'yorha'" 
        :placeholder="placeholder"
        :items="items"
        v-model="activeKey"
        />
</template>