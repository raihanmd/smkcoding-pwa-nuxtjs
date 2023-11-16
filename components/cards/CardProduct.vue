<script lang="ts" setup>
const { product } = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <section class="bg-white max-w-60 sm:w-60 h-auto rounded-lg shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
    <NuxtLink :to="`/product/${product.slug}`">
      <img :src="product.image" class="w-full h-full max-h-[255px] object-fit rounded-t-lg" />
    </NuxtLink>
    <div class="p-5 relative flex gap-2 flex-col justify-between h-[9em] sm:h-[10em] w-full">
      <div class="flex flex-col gap-2">
        <h3 class="text-md md:text-lg font-quicksand bold whitespace-normal overflow-hidden text-ellipsis" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical">{{ product.name }}</h3>
      </div>

      <div class="flex justify-between items-center py-2">
        <span class="text-sm font-normal">{{ product.category }}</span>
        <span class="text-sm font-normal">${{ product.price }}</span>
      </div>

      <div
        :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px]
${product.isCart ? 'bg-blue-600 text-white' : 'bg-white'} shadow-xl
rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white
transition duration-300`"
      >
        <i class="ri-shopping-cart-2-line"></i>
      </div>
    </div>
  </section>
</template>
