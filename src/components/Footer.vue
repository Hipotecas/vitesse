<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const pages = [{
  name: 'Products',
  path: '/products',
},
{
  name: 'About us',
  path: '/about',
},
{
  name: 'Careers',
  path: '/careers',
},
{
  name: 'Contact us',
  path: '/contact',
}]
</script>

<template>
  <footer class="h-25 bg-hex-FAFAFA mt-20 text-center flex flex-col justify-center <sm:mt-10">
    <nav class="flex items-center  justify-center pt-4 ">
      <div v-for="item in pages" :key="item.name" class="h-8 leading-8 text-sm text-gray-500 not-first:ml-4">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </div>
    </nav>
    <div class="text-sm text-gray-500">
      Copyright © 2022 Zenith. All Rights Reserved.
    </div>
  </footer>
</template>

<style scoped>
.page:nth-child(1) {
  margin-left: 0;
}
</style>
