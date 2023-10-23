<script lang="ts" setup></script>

<template>
  <p>Card comp</p>
  <button @click="$emit('sendMessage', 'Hello World')">Emit</button>
</template>
