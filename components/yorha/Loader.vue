<script lang="ts" setup>
import { LongLoadingText, ShortLoadingText } from '~/assets/text/yorha/loading';
const { $anime } = useNuxtApp();

const loaderStore = useLoaderStore();
const { isLoading, isQuickLoad } = storeToRefs(loaderStore);
const { beginLoading, finishLoading } = loaderStore;

const lines = ref<string[][]>([]);

const startLoading = () =>
{
    lines.value = (isQuickLoad.value ? ShortLoadingText : ShortLoadingText)
        .split('\n')
        .map(line => line.split(''));

    let typingSpeed = 40;
    let fadeSpeed = 1000;

    const fadeIn = $anime({
        targets: '.text-layer .fade-in',
        opacity: [0, 1],
        duration: fadeSpeed,
        easing: 'linear',

        complete() {
            $anime({
                targets: '.text-layer > .header > h2 > span',
                opacity: [0, 1],
                duration: fadeSpeed,
                delay: $anime.stagger(fadeSpeed),
                easing: 'linear',
                loop: true,
                endDelay: fadeSpeed,
            });

            $anime({
                targets: `.text-layer > .content > .line > span`,
                opacity: [0, 1],
                duration: typingSpeed,
                delay: $anime.stagger(typingSpeed),

                complete() {
                    $anime({
                        targets: '.yorha-loader',
                        opacity: 0,
                        duration: 2000,
                        delay: 100,
                        complete() {
                            finishLoading();
                        }
                    });
                }
            });
        }
    });
}

onMounted(startLoading);

const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', beginLoading);
</script>

<template>
    <div v-if="isLoading" class="yorha-loader">
        <div class="grid-layer" />
        <div class="image-layer">
            <div class="image" />
        </div>
        <div class="text-layer">
            <div class="header animated-text">
                <h1 class="fade-in">LOADING</h1>
                <span class="fade-in">-</span>
                <h2 class="fade-in">CHECKING SYSTEM<span>.</span><span>.</span><span>.</span></h2>
            </div>
            <div class="content animated-text">
                <div class="line" :data-line="idx" v-for="line, idx in lines">
                    <span v-for="letter in line">{{ letter }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.yorha-loader {
    @apply absolute top-0 left-0 right-0 bottom-0 z-10;
    background-color: black;
}

.yorha-loader > * {
    @apply absolute left-0 top-0 bottom-0 right-0;
}

.image-layer {
    @apply z-0 flex flex-col justify-center items-center;
    background: black;

    &> .image {
        @apply w-80 md:w-148 lg:w-172 h-full;
        background-image: url(~/assets/images/yorha/loading-banner.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        filter: sepia(200000%)
    }
}

.grid-layer {
    @apply z-1;

    background: #222A;
    background-size: 6px 6px;
    background-image: 
    linear-gradient(#0005 .1em, transparent .1em), 
    linear-gradient(90deg, #0005 .1em, transparent .1em);
}

.text-layer {
    @apply z-2;
    @apply font-yorha-loader text-lg;
    @apply px-8 py-6 lg:px-32 lg:py-16;
    @apply flex flex-col;

    color: hsla(32, 100%, 97%, 0.75);
}

.text-layer .animated-text {
    text-shadow: 1px 1px 1px rgba(251, 12, 12,.5), 0px -.5px 1.5px rgba(12, 79, 251,.5),-1px 0px 1px rgba(52, 251, 12, .5);
    animation: chromaticMove 15000ms ease infinite,pulse ease 300ms  infinite;
}

@keyframes chromaticMove { 
    0% {text-shadow: 1px 1px 1px rgba(251, 12, 12,.5), 0px -.5px 1.5px rgba(12, 79, 251,.5),0px 0px -1px rgba(52, 251, 12, .5);}
    50% {text-shadow: 1px 1px 1px rgba(251, 12, 12,.5), 0px -.5px 1.5px rgba(12, 79, 251,.5),-1px 1px 1px rgba(52, 251, 12, .5);}
    100% {text-shadow: 1px 1px 1px rgba(251, 12, 12,.5), 0px -.5px 1.5px rgba(12, 79, 251,.5),1px -.5px 1px rgba(52, 251, 12, .5);}
}

@keyframes pulse { 
    0% { opacity:.95;transform: skewX(.25deg);}
    25% { opacity:1;}
    50% {opacity:.95;}
    75% { opacity:1; transform:skewX(.25deg);}
    100% {opacity:.95;}
}

.header {
    @apply flex flex-col md:flex-row items-baseline pb-4 lg:pb-16;
}

.header > h1 {
    @apply text-4xl lg:text-6xl;
}

.header > span { @apply px-2; }
.header > h2 { @apply text-xl lg:text-3xl; }

.content {
    @apply px-8 overflow-y-scroll;
}

.content::-webkit-scrollbar {
  display: none;
}

.content > .line {
    @apply min-h-7.5 text-lg;
}

.content > .line > span {
    @apply opacity-0;
}

.fade-in {
    @apply opacity-0;
}
</style>