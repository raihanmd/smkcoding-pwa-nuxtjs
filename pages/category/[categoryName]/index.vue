<script setup>
const route = useRoute();

const categoryName = typeof route.params.categoryName === "string" ? route.params.categoryName.toString() : null;
const { data: productResponse, pending, error } = await useFetch(`https://www.ecommerce.raihanmd.site/api/category/${categoryName}`);
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
      <template v-for="item in productResponse.payload" :key="item.productId">
        <CardProduct :product="item" class="card-product" />
      </template>
    </div>
  </div>
</template>
