<script lang="ts" setup>
import { useProductStore } from "~/stores/product";

const route = useRoute();
const productStore = useProductStore();
const product = ref({});

const slugProduct = typeof route.params.slugProduct === "string" ? route.params.slugProduct.toString() : null;

console.log(slugProduct);

productStore.getProductBySlug(slugProduct as string).then(() => {
  product.value = productStore.products[0];
});
</script>
<template>
  <div class="py-5 px-2">
    <DetailProduct :product="product" />
  </div>
</template>
