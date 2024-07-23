<script setup lang="ts">
const props = defineProps<{
    segmentsTotal: number,
    segmentsActive: number
}>();
</script>

<template>
    <div>
        <span v-for="i in segmentsTotal"
            :class="{'segment': true, 'segment-active': i <= segmentsActive}">[]</span>
    </div>
</template>

<style scoped>
.segment { @apply bg-red; }
.segment.segment-active { @apply bg-green; }
</style>