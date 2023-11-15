<script lang="ts" setup>
import { products } from "~/composables/constants/products";
import type { IProduct } from "~/types/product";

const route = useRoute();

const slugProduct = typeof route.params.slugProduct === "string" ? route.params.slugProduct.toString() : null;

const product = ref(products.find((item: IProduct) => item.slug === slugProduct));
</script>
<template>
  <div class="py-5 px-2">
    <DetailProduct :product="product" />
  </div>
</template>
