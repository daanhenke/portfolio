<script setup lang="ts">
const props = defineProps<{
    label: string,
    segmentsTotal: number,
    segmentsActive: number
}>();
</script>

<template>
    <YorhaButton class="yorha-progressbar">
        <span>{{ label }}</span>
        <div class="yorha-progressbar-progress">
            <span v-for="i in segmentsTotal"
            :class="{'segment': true, 'segment-active': i <= segmentsActive}" />
        </div>
    </YorhaButton>
</template>

<style scoped>
.yorha-progressbar { @apply flex justify-between items-center; }

.yorha-progressbar:hover .segment {
    background-color: var(--yorha-weak);
}

.yorha-progressbar-progress { @apply flex items-center; }

.segment {
    @apply mx-1px flex;
    width: .25rem;
    height: .25rem;
    background-color: var(--yorha-strong);
    transition: height .2s;
}
.segment.segment-active {
    height: 1.25rem;
}
</style>