<script setup>
import unslugify from "~/utils/unslugify";

const myUnslugify = ref(unslugify);
const isShow = ref(false);
const { categories } = defineProps({
  categories: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="relative select-none">
    <div class="border border-primary flex items-center justify-center px-3 py-2 rounded-lg gap-4 cursor-pointer w-full" @click="isShow = !isShow">
      <span class="text-primary font-medium">Categories</span>
      <i
        :class="`ri-arrow-down-s-line text-primary text-xl text-bold transition
duration-300 ${isShow ? 'rotate-180' : 'rotate-0'}`"
      ></i>
    </div>

    <div v-show="isShow" class="z-30 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-full absolute top-14">
      <ul class="py-2 text-sm text-gray-700">
        <li>
          <NuxtLink :to="`/product`">
            <span class="block px-4 py-2 hover:bg-primary hover:text-white transition duration-200 cursor-pointer">All</span>
          </NuxtLink>
        </li>
        <li v-for="(category, i) in categories" :key="i">
          <NuxtLink :to="`/category/${category.name}`">
            <span class="block px-4 py-2 hover:bg-primary hover:text-white transition duration-200 cursor-pointer">{{ myUnslugify(category?.name) }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
