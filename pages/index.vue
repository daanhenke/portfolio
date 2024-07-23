<template>
  <main>
    <div class="px-2 flex flex-col w-86">
      <YorhaProgressBar label="CSS" :segments-total="10" :segments-active="5" />
      <YorhaProgressBar label="C#" :segments-total="10" :segments-active="10" />
    </div>
    <ThemeSelect />
  </main>
</template>
