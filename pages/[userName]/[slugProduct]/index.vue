<script setup>
const route = useRoute();

const slugProduct = typeof route.params.slugProduct === "string" ? route.params.slugProduct.toString() : null;
const userName = typeof route.params.userName === "string" ? route.params.userName.toString() : null;
const { data, pending, error } = await useFetch(`https://www.ecommerce.raihanmd.site/api/${userName}/${slugProduct}`);
</script>
<template>
  <div class="py-5 px-2">
    <span v-if="pending">Loading...</span>
    <span v-else-if="error">Error: {{ error }}</span>
    <span v-if="data"><DetailProduct :product="data?.payload" /></span>
  </div>
</template>
