<script setup lang="ts">
</script>

<template>
    <button class="yorha-button">
        <slot />
    </button>
</template>

<style scoped>
.yorha-button {
    @apply p-3 my-2 px-20 relative z-1;
    background-color: var(--yorha-button-bg-normal);
    transition: color .33s;
    
    &::before, &::after {
        content: '';
        transition: width .33s;
        z-index: -1;
        @apply absolute top-0 bottom-0 w-0;
    }

    &::before { 
        @apply left-0 w-0;
        background-color: var(--yorha-button-bg-hover);
    }
    &::after { 
        @apply left-0 w-0;
        top: -.2rem;
        bottom: -.2rem;
        border: solid var(--yorha-button-bg-hover);
        border-width: .1rem 0;
    }

    &:hover::before {
        @apply w-full;
    }

    &:hover::after {
        @apply w-full;
    }

    &:hover {
        color: var(--yorha-inverted-text-color);
    }
}
</style>