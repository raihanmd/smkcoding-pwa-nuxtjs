<script lang="ts" setup>
import type { IProduct } from "~/types/product";

const { product } = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

const oneProduct = ref(product);

const addCart = () => {
  oneProduct.value.isCart = !oneProduct.value.isCart;
  let localStorageData = localStorage.getItem("products");
  let productOfCart: IProduct[] = [];
  if (localStorageData) {
    productOfCart = JSON.parse(localStorageData) as IProduct[];
  }
  if (oneProduct.value.isCart) {
    productOfCart.push(oneProduct.value);
    localStorage.setItem("products", JSON.stringify(productOfCart));
  } else {
    productOfCart = productOfCart.filter((item) => item.id !== oneProduct.value.id);
    localStorage.setItem("products", JSON.stringify(productOfCart));
  }
};
</script>

<template>
  <section class="bg-white max-w-60 sm:w-60 h-auto rounded-lg shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
    <NuxtLink :to="`/product/${oneProduct.slug}`">
      <img :src="oneProduct.image" class="w-full h-full max-h-[255px] object-fit rounded-t-lg" />
    </NuxtLink>
    <div class="p-5 relative flex gap-2 flex-col justify-between h-[9em] sm:h-[10em] w-full">
      <div class="flex flex-col gap-2">
        <!-- <Rating v-model="" :cancel="false" readonly unstyled class="flex gap-1" /> -->
        <h3 class="text-md md:text-lg font-quicksand bold whitespace-normal overflow-hidden text-ellipsis" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical">{{ oneProduct.name }}</h3>
      </div>

      <div class="flex justify-between items-center py-2">
        <span class="text-sm font-normal">{{ oneProduct.category }}</span>
        <span class="text-sm font-normal">${{ oneProduct.price }}</span>
      </div>

      <div
        :class="`cursor-pointer absolute z-100 -top-5 sm:-top-7 right-3 sm:right-7 w-9 h-9 sm:w-[50px] sm:h-[50px] ${
          oneProduct.isCart ? 'bg-blue-600 text-white' : 'bg-white'
        } shadow-xl rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300`"
        @click="addCart"
      >
        <i class="ri-shopping-cart-2-line"></i>
      </div>
    </div>
  </section>
</template>
