<script setup>
useSeoMeta({
  title: "Lynx Shop | Product Page",
  ogTitle: "Lynx Shop | Product Page",
  description: "Product page Lynx Shop website.",
});

const { data, error, pending } = await useFetch("https://api.ecommerce.raihanmd.site/api/products");
</script>

<template>
  <div class="container p-2 mx-auto w-full">
    <div class="py-10">
      <span v-if="pending">Loading...</span>
      <span v-else-if="error">Error: {{ error }}</span>
      <div class="mb-6 flex justify-end gap-6">
        <!-- <Dropdown @selected-category="selectedCategory = $event" /> -->
      </div>
      <div class="flex gap-6 flex-wrap mx-auto">
        <template v-for="item in data.payload" :key="item.productId">
          <CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]" />
        </template>
      </div>
    </div>
  </div>
</template>
