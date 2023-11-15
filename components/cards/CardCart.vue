<script lang="ts" setup>
const { product } = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div class="bg-white shadow-xl p-6 rounded-xl flex gap-4 items-center">
    <div class="w-[130px] bg-gray-300">
      <img :src="product.image" class="rounded-lg h-full w-full object-contain" />
    </div>
    <div class="w-full">
      <h5 class="text-xl font-semibold mb-2">{{ product.name }}</h5>
      <p class="text-lg font-light mb-3">${{ product.price }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center border border-gray-300 w-max rounded-full">
          <button class="cursor-pointer py-1 pl-4 pr-2 text-lg flex items- center justify-center">-</button>

          <div class="py-1 px-2 text-lg flex items-center justify- center">1</div>

          <button class="cursor-pointer py-1 pl-2 pr-4 text-lg flex items- center justify-center">+</button>
        </div>
        <div class="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded- full cursor-pointer" @click="$emit('removeCart', product.id)">
          <i class="ri-delete-bin-7-fill text-sm text-gray-600"></i>
          <span class="text-sm text-gray-500">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>
