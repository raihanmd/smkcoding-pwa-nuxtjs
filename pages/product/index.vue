<script lang="ts" setup>
import { useProductStore } from "~/stores/product";

const productStore = useProductStore();
const allProducts = ref([]);

productStore.getAllProducts().then(() => {
  allProducts.value = productStore.products;
});

const selectedCategory = ref("");
</script>

<template>
  <div class="py-5 px-2">
    <div class="mb-6 flex justify-end gap-6">
      <NuxtLink to="/category/create" class="bg-orange-500 text-white flex justify- center items-center px-3 rounded-lg">Create Category</NuxtLink>
      <NuxtLink to="/product/create" class="bg-green-500 text-white flex justify-center items-center px-3 rounded-lg">Create Products</NuxtLink>
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
~/stores/products ~/stores/product
