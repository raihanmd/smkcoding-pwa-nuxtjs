<script setup>
import { ref } from "vue";
const name = ref("Lynx Shop");
useSeoMeta({
  title: "Lynx Shop | Home",
  ogTitle: "Lynx Shop | Home",
  description: "This is my epic ecommerce website.",
  ogDescription: "This is my epic ecommerce website.",
  ogImage:
    "https://firebasestorage.googleapis.com/v0/b/ecomerce-bc524.appspot.com/o/logo%2Flynxshop.webp?alt=media&token=6e522069-86f6-49dc-853e-3f0dc0d879c4&_gl=1*182cemb*_ga*MjEyNjI5Njg5NS4xNjk1NzExMzg2*_ga_CW55HF8NVT*MTY5NjY5MjM4My4yLjEuMTY5NjY5MjQwOC4zNS4wLjA.",
});
</script>

<template>
  <p class="font-quicksand">Lynx shop</p>
</template>
