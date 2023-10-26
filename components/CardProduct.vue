<script setup>
import { RiShoppingCart2Line } from "vue-remix-icons";

import toRupiah from "@develoka/angka-rupiah-js";

const { product } = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <NuxtLink :to="`${product.ownedBy}/${product.productSlug}`">
    <section class="bg-white max-w-60 sm:w-60 h-auto rounded-lg shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <img :src="product.productImage" class="w-full h-full max-h-[255px] object-fit rounded-t-lg" />
      <div class="p-5 relative flex gap-2 flex-col justify-between h-[9em] sm:h-[10em] w-full">
        <div class="flex flex-col gap-2">
          <Rating v-model="product.productRating" :cancel="false" readonly unstyled class="flex gap-1" />
          <h3 class="text-md md:text-lg font-quicksand bold whitespace-normal overflow-hidden text-ellipsis" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical">{{ product.productName }}</h3>
        </div>

        <div class="flex justify-end">
          <span class="text-md font-normal">{{ toRupiah(product.productPrice, { floatingPoint: 0 }) }}</span>
        </div>

        <div
          class="cursor-pointer absolute z-20 -top-5 sm:-top-7 right-3 sm:right-7 w-9 h-9 sm:w-[50px] sm:h-[50px] bg-white shadow-xl rounded-full flex justify-center items-center hover:bg-yellow-300 transition duration-300 p-[6px] sm:p-3"
        >
          <RiShoppingCart2Line />
        </div>
      </div>
    </section>
  </NuxtLink>
</template>
