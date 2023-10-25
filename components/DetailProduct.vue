<script setup>
import toRupiah from "@develoka/angka-rupiah-js";

const { product } = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <section class="p-10">
    <div class="container">
      <NuxtLink to="/product" class="bg-white border border-slate-300 w-max flex items-center gap-1 py-2 px-5 rounded-full mb-7 cursor-pointer">
        <i class="ri-arrow-left-s-line text-base font-medium"></i>
        <span class="text-base font-medium">Kembali</span>
      </NuxtLink>
      <div class="flex items-center flex-col lg:flex-row gap-5">
        <img :src="product.productImage" class="w-full lg:w-1/2 h-[500px] rounded-3xl" />
        <div class="w-full lg:w-1/2">
          <h1 class="text-4xl font-bold mb-3">{{ product.productName }}</h1>
          <h3 class="text-4xl font-light mb-3">{{ toRupiah(product.productPrice, { floatingPoint: 0 }) }}</h3>
          <p class="mb-10">{{ product.productDescription }}</p>
          <div class="flex flex-col gap-4">
            <div class="w-full h-10 flex items-center gap-2 bg-blue-600 text-white py- 3 justify-center rounded-lg cursor-pointer hover:bg-blue-600/80 transition duration-300 relative">
              <i class="ri-shopping-cart-2-line"></i>
              <span>Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
