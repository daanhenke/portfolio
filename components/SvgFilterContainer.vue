<template>
    <svg width="0" height="0">
        <filter id="chromatic-aberration">
            <feColorMatrix type="matrix" 
                result="_red"
                values="4 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 1 0" />
            <feColorMatrix type="matrix"
                result="_blue"
                in="SourceGraphic"
                values="0 0 0 0 0
                        0 3 0 0 0
                        0 0 10 0 0
                        0 0 0 1 0" />
            <feOffset in="_red" dx=".3" dy=".01" result="red" />
            <feOffset in="_blue" dx="-.4" dy="-.02" result="blue" />

            <feBlend mode="screen" in="red" in2="blue" />
        </filter>
    </svg>
</template>