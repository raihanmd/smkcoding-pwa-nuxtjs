<script setup lang="ts">
import { RiShoppingCart2Line } from "vue-remix-icons";

const { product } = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <section class="bg-white hover:shadow-xl rounded-xl overflow-hidden h-auto">
    <NuxtLink :to="`/product/${product.productSlug}`">
      <div :class="`w-full bg-gray-300`">
        <img :src="product.productImage" class="w-full h-full object-fit" />
      </div>
    </NuxtLink>
    <div class="px-5 pb-5 pt-9 relative h-[9em]">
      <h3 class="text-lg font-quicksand bold mb-4 text-limit limit-2 whitespace-normal overflow-hidden text-ellipsis" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical">{{ product.productName }}</h3>

      <div class="flex justify-between items-center">
        <span class="text-sm font-normal">{{ product.category || "Lain-lain" }}</span>
        <span class="text-sm font-normal">{{ product.productPrice }}</span>
      </div>

      <div :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px] bg-white shadow-xl rounded-full flex justify-center items-center hover:bg-blue-600hover:text-white transition duration-300 p-3`">
        <RiShoppingCart2Line />
      </div>
    </div>
  </section>
</template>
