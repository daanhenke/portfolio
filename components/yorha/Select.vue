<script setup lang="ts">
const props = defineProps<{
    placeholder: string,
    items: {
        key: string,
        label: string
    }[]
}>()

const activeKey = defineModel();

const isOpen = ref(false);

const activeLabel = computed(() => props.items.find(kv => kv.key === activeKey.value)?.label ?? props.placeholder)
</script>

<template>
    <div class="yorha-select">
        <YorhaButton @click="isOpen = !isOpen" class="yorha-select-button">
            <span v-if="placeholder">
                {{ placeholder }}: {{ activeLabel }}
            </span>
            <span v-else>
                {{ activeLabel }}
            </span>
        </YorhaButton>
        <div :class="`yorha-select-items ${isOpen ? 'yorha-select-open' : ''}`">
            <YorhaButton v-for="item in items"
                @click="activeKey = item.key; isOpen = false;"
                >
                {{ item.label }}
            </YorhaButton>
        </div>
    </div>
</template>
<style scoped>
.yorha-select-items {
    @apply flex flex-col overflow-hidden absolute;
    clip: rect(auto, auto, 0, auto);
    transition: clip 1s, transform .2s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scaleY(.85);
    transform-origin: top;
}

.yorha-select-open {
    clip: rect(auto, auto, 100vh, auto);
    transform: scaleY(1);
}
</style>