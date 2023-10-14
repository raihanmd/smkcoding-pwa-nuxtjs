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
  <header class="w-full border-b border-slate-200 p-4 flex justify-center sticky top-0">
    <div class="container">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-semibold">
          <div class="flex justify-center items-center gap-2">
            <img src="~/assets/images/lynxshop.webp" class="w-8" />
            <p class="font-open-sauce-one">LynxShop</p>
          </div>
        </NuxtLink>
        <nav class="flex items-center gap-2 sm:gap-6 font-quicksand transition-all">
          <div v-for="item in NAV_ITEMS" :key="item.key">
            <NuxtLink :to="`${item.link}`" :class="{ 'text-fuchsia-600 underline hover:text-fuchsia-600': route.name === item.route }" class="hover:text-fuchsia-300 font-semibold transition-all">
              <p>{{ item.label }}</p>
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
