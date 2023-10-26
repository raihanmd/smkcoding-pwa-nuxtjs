<script setup>
useSeoMeta({
  title: "Lynx Shop | Product",
  ogTitle: "Lynx Shop | Product",
  description: "Product page Lynx Shop website.",
});

const { data: productResponse, error, pending } = await useFetch("https://www.ecommerce.raihanmd.site/api/products");
const { data: categoryResponse } = await useFetch("https://www.ecommerce.raihanmd.site/api/category");
</script>

<template>
  <div class="py-5 px-2">
    <span v-if="pending">Loading...</span>
    <span v-else-if="error">{{ error }}</span>
    <div v-if="categoryResponse" class="mb-6 flex justify-end gap-6">
      <Dropdown :categories="categoryResponse.payload" />
    </div>
    <div v-if="productResponse" class="flex gap-2 px-2 flex-wrap justify-center w-full">
      <template v-for="item in productResponse?.payload" :key="item.productId">
        <CardProduct :product="item" class="card-product" />
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
