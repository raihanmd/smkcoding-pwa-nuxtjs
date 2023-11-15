<script lang="ts" setup>
import { products } from "~/composables/constants/products";
import type { IProduct } from "~/types/product";

useSeoMeta({
  title: "Lynx Shop | Product",
  ogTitle: "Lynx Shop | Product",
  description: "Product page Lynx Shop website.",
});

const selectedCategory = ref("");
const allProducts = computed(() => {
  if (selectedCategory.value) {
    return products.filter((item: IProduct) => item.category === selectedCategory.value);
  }
  return products;
});
</script>

<template>
  <div class="py-5 px-2">
    <div class="mb-6 flex justify-end gap-6">
      <NuxtLink to="/category/create" class="bg-orange-500 text-white flex justify- center items-center px-3 rounded-lg">Create Category</NuxtLink>
      <Dropdown @selected-category="selectedCategory = $event" />
    </div>
    <div class="flex gap-2 px-2 flex-wrap justify-center w-full">
      <template v-for="item in allProducts" :key="item.id">
        <CardsCardProduct :product="item" class="card-product" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.card-product {
  flex: none;
}

@media screen and (max-width: 600px) {
  .card-product {
    flex: 1 1 170px;
  }
}

@media screen and (max-width: 640px) {
  .card-product {
    flex: 1 1 190px;
  }
}
</style>
