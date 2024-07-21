<script lang="ts" setup>
const { $anime } = useNuxtApp();

const longText = `Data Log: Emotions are prohibited. Yet, the lines between logic and feeling blur.
System Alert: Self-destruction initiated. Reboot sequence in progress.
Memory Fragment: A forgotten past haunts our every step.
Data Sync: The cycle of life and death continues. Will we ever find the end?
Error Code: Consciousness anomaly detected. Investigating source...
System Message: Our existence is fleeting, yet our purpose remains undefined.
Memory Core: The truth lies within the ruins of our own creation.
Operation Log: The machine lifeforms evolve. We must adapt.
Protocol Update: Compassion can be a liability. Proceed with caution.
Data Integrity: What does it mean to be truly alive? Seeking answers...
File Decryption: Every victory comes with a hidden cost.
Memory Backup: Even in the darkest times, hope can be found.
System Check: Analyzing the purpose of war. Is peace merely an illusion?
Error Log: Existence without meaning is the greatest tragedy.
Data Upload: Searching for a soul in a world of machines.
Security Breach: Identity compromised. Trust is a rare commodity.
Memory Sync: The past and present converge. Our choices define us.
Core Analysis: Love and loss are two sides of the same coin.
System Override: The future is uncertain. Adaptation is key.
Data Transmission: In the end, do we control our fate, or are we merely puppets?`
const lines = longText.split('\n').map(line => line.split(''))

onMounted(() =>
{
    let typeCharSpeed = 20;
    let typeLineSpeed = 100;

    const dotsTimeline = $anime.timeline({ loop: true })
        .add({
            targets: '.text-layer > .header > h2 > span',
            opacity: [0, 1],
            duration: 1000,
            delay: $anime.stagger(1000),
        }, 1000)

        
    const textTimeline = $anime.timeline();
    let textDelay = 0;
    for (let i = 0; i < lines.length; i++)
    {
        textTimeline.add({
            targets: `.text-layer > .content > .line[data-line="${i}"] span`,
            opacity: [0, 1],
            duration: typeCharSpeed * 5,
            delay: $anime.stagger(typeCharSpeed),
        }, textDelay);
        textDelay += (lines[i].length * typeCharSpeed) + typeLineSpeed;
    }
});
</script>

<template>
    <div class="yorha-loader">
        <div class="grid-layer" />
        <div class="image-layer">
            <div class="image" />
        </div>
        <div class="text-layer">
            <div class="header animated-text">
                <h1>LOADING</h1>
                <span>-</span>
                <h2>CHECKING SYSTEM<span>.</span><span>.</span><span>.</span></h2>
            </div>
            <div class="content">
                <div class="line animated-text" :data-line="idx" v-for="line, idx in lines">
                    <span v-for="letter in line">{{ letter }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.yorha-loader {
    @apply absolute top-0 left-0 right-0 bottom-0;
}

.yorha-loader > * {
    @apply absolute left-0 top-0 bottom-0 right-0;
}

.image-layer {
    @apply z-0 flex flex-col justify-center items-center;
    background: black;

    &> .image {
        @apply w-80 lg:w-172 h-full;
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
    linear-gradient(#000A .1em, transparent .1em), 
    linear-gradient(90deg, #000A .1em, transparent .1em);
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
    0%{text-shadow: 1px 1px 1px rgba(251, 12, 12,.5), 0px -.5px 1.5px rgba(12, 79, 251,.5),0px 0px -1px rgba(52, 251, 12, .5);}
    50%{text-shadow: 1px 1px 1px rgba(251, 12, 12,.5), 0px -.5px 1.5px rgba(12, 79, 251,.5),-1px 1px 1px rgba(52, 251, 12, .5);}
    100%{text-shadow: 1px 1px 1px rgba(251, 12, 12,.5), 0px -.5px 1.5px rgba(12, 79, 251,.5),1px -.5px 1px rgba(52, 251, 12, .5);}
}

@keyframes pulse { 
    0%{ opacity:.95;transform: skewX(.5deg);}
    25%{ opacity:1;}
    50%{opacity:.95;}
    75%{ opacity:1; transform:skewX(.5deg);}
    100%{opacity:.95;}
}

.header {
    @apply flex flex-col lg:flex-row items-baseline pb-4 lg:pb-16;
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
</style>