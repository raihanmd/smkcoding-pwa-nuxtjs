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
  <NuxtLink :to="`/product/${product.productSlug}`">
    <section class="flex flex-col bg-white hover:shadow-xl shadow-md rounded-xl overflow-hidden h-[25rem]">
      <div :class="`w-full bg-gray-300`">
        <img :src="product.productImage" class="w-full h-full max-w-[255px] max-h-[255px] object-fit" />
      </div>
      <div class="p-5 relative flex gap-2 flex-col justify-between h-full">
        <Rating v-model="product.productRating" :cancel="false" readonly />
        <h3 class="text-lg font-quicksand bold text-limit limit-2 whitespace-normal overflow-hidden text-ellipsis" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical">{{ product.productName }}</h3>

        <div class="flex justify-between items-center">
          <span class="text-sm font-normal">{{ product.category || "Lain-lain" }}</span>
          <span class="text-sm font-normal">{{ toRupiah(product.productPrice, { floatingPoint: 0 }) }}</span>
        </div>

        <div :class="`cursor-pointer absolute z-20 -top-5 right-7 w-[50px] h-[50px] bg-white shadow-xl rounded-full flex justify-center items-center hover:bg-yellow-300  transition duration-300 p-3`">
          <RiShoppingCart2Line />
        </div>
      </div>
    </section>
  </NuxtLink>
</template>
