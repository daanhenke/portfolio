import { defineConfig, presetWind, presetTypography, transformerDirectives, presetWebFonts } from 'unocss';

export default defineConfig({
    presets: [
        presetWind(),
        presetTypography(),
        presetWebFonts({
            provider: 'none',
            fonts: {
                'yorha-loader': 'yorha-loader-font'
            }
        })
    ],
    transformers: [ transformerDirectives() ]
});