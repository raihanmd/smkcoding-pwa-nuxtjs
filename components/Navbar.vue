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
  <header class="w-full p-4 flex justify-center z-10">
    <div class="container">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-semibold">
          <div class="flex justify-center items-center gap-2">
            <img src="~/assets/images/lynxshop.webp" class="w-8" />
            <p class="font-open-sauce-one hidden md:block">LynxShop</p>
          </div>
        </NuxtLink>
        <nav class="flex items-center gap-3 sm:gap-6 font-quicksand transition-all">
          <NuxtLink v-for="item in NAV_ITEMS" :key="item.key" :to="`${item.link}`" :class="{ 'text-white hover:text-white': route.name === item.route }" class="hover:text-fuchsia-300 font-semibold transition-all">
            <p>{{ item.label }}</p>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
