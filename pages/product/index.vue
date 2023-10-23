<script lang="ts" setup>
useSeoMeta({
  title: "Lynx Shop | Product Page",
  ogTitle: "Lynx Shop | Product Page",
  description: "Product page og Lynx Shop website.",
  ogDescription: "Product page og Lynx Shop website.",
  ogImage:
    "https://firebasestorage.googleapis.com/v0/b/ecomerce-bc524.appspot.com/o/logo%2Flynxshop.webp?alt=media&token=6e522069-86f6-49dc-853e-3f0dc0d879c4&_gl=1*182cemb*_ga*MjEyNjI5Njg5NS4xNjk1NzExMzg2*_ga_CW55HF8NVT*MTY5NjY5MjM4My4yLjEuMTY5NjY5MjQwOC4zNS4wLjA.",
});
</script>

<template>
  <div class="container">
    <p class="font-ubuntu">Product Page</p>
    <Card @sendMessage="(msg) => console.log(msg)" />
  </div>
</template>
