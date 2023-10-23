<script lang="ts" setup>
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
  <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
    <div
      class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
  </div>
  <div class="absolute inset-x-0 top-[calc(100%-23rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]" aria-hidden="true">
    <div
      class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
  </div>
  <div class="container p-2 mx-auto">
    <div class="flex w-full flex-col md:flex-row justify-center items-center pt-20 px-5 md:px-0">
      <div class="flex gap-2 flex-col basis-1/3 items-center justify-center">
        <h2 class="text-4xl md:text-6xl font-ubuntu font-semibold text-center md:text-left">Welcome to my website</h2>
        <p class="font-quicksand text-center md:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti soluta laboriosam blanditiis, quasi dolores architecto, quo exercitationem eveniet rem libero, officia doloremque eaque at voluptatum consectetur magnam
          culpa.
        </p>
      </div>
      <div class="basis-2/3">
        <img src="~/assets/images/home__shop.webp" alt="Shop-3D-Image" style="user-drag: none; -webkit-user-drag: none; user-select: none; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none" />
      </div>
    </div>
  </div>
</template>
