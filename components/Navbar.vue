<script setup>
const route = useRoute();

const NAV_ITEMS = [
  {
    key: 1,
    route: "index",
    label: "Home",
    link: "/",
  },
  {
    key: 2,
    route: "product",
    label: "Product",
    link: "/product",
  },
  {
    key: 3,
    route: "cart",
    label: "Cart",
    link: "/cart",
  },
];
</script>

<template>
  <header class="w-full p-4 flex justify-center sticky top-0 backdrop-blur-sm bg-white/30 z-50">
    <div class="container">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-semibold" style="user-drag: none; -webkit-user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none">
          <div class="flex justify-center items-center gap-2">
            <img src="~/assets/images/lynxshop.webp" class="w-8" style="user-drag: none; -webkit-user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none" />
            <p class="font-open-sauce-one hidden md:block">LynxShop</p>
          </div>
        </NuxtLink>
        <nav class="flex items-center gap-3 sm:gap-6 font-quicksand transition-all">
          <NuxtLink v-for="item in NAV_ITEMS" :key="item.key" :to="`${item.link}`" :class="{ 'text-sky-500 hover:text-sky-500': route.name === item.route }" class="hover:text-sky-300 font-semibold transition-all">
            <p>{{ item.label }}</p>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
