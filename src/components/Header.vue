<script setup>
import logo from '~/assets/images/logo.jpg';
const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
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
  },
]

const active = reactive({ index: 0 })
const handleClick = (index) => {
  active.index = index
}
</script>

<template>
  <header class="m-auto flex container items-center justify-between px-4 xl:justify-start <sm:w-screen">
    <div>
      <img :src="logo" class="w-32 <sm:w-20">
    </div>
    <ul class="ml-8 flex items-center justify-center hidden md:flex">
      <li
        v-for="(item, index) in links"
        :key="item.name"
        class=" text-hex-909399 text-md mx-8 cursor-pointer "
        :class="[active.index === index ? 'text-hex-303133  active' : '']"
        @click="handleClick(index)"
      >
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div class="block md:hidden">
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94971 11.9497H39.9497" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.94971 23.9497H39.9497" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.94971 35.9497H39.9497" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </div>
  </header>
</template>

<style scoped>
.active {
  border-bottom: 2px solid #409eff;
}
</style>
