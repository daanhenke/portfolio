export type ThemeIdentifier = 'yorha' | 'tarot';

export const useThemeStore = defineStore('theme', () =>
{
    const currentTheme = ref<ThemeIdentifier>('yorha');
    return {
        currentTheme
    };
})