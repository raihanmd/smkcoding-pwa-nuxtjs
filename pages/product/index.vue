<script setup>
useSeoMeta({
  title: "Lynx Shop | Product Page",
  ogTitle: "Lynx Shop | Product Page",
  description: "Product page Lynx Shop website.",
});

const { data, error, pending } = await useFetch("https://api.ecommerce.raihanmd.site/v1/product");
</script>

<template>
  <div class="container mx-auto w-full">
    <div class="py-10">
      <span v-if="pending">Loading...</span>
      <span v-else-if="error">Error: {{ error }}</span>
      <!-- <div class="mb-6 flex justify-end gap-6">
        <Dropdown @selected-category="selectedCategory = $event" />
      </div> -->
      <div v-if="data" class="flex gap-2 px-2 flex-wrap justify-center w-full">
        <template v-for="item in data.payload" :key="item.productId">
          <CardProduct :product="item" class="card-product" />
        </template>
      </div>
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
