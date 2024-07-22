export const useLoaderStore = defineStore('loader', () =>
{
    const isLoading = ref(true);
    const isQuickLoad = ref(false);

    const beginLoading = () => isLoading.value = true;
    const finishLoading = () =>
    {
        isLoading.value = false;

        // Next time we start loading it won't be the long version
        isQuickLoad.value = true;
    }

    return {
        isLoading,
        isQuickLoad,

        beginLoading,
        finishLoading
    };
})