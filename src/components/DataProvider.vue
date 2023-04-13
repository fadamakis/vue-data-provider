<script setup>
import { ref } from "vue";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const data = ref(null);
const loaded = ref(false);

async function fetchProducts() {
  const response = await fetch(
    `https://dummyjson.com/products/category/${props.category}`
  ).then((res) => res.json());
  data.value = response.products;
  loaded.value = true;
}
fetchProducts();
</script>

<template>
  <slot :data="data" :loading="!loaded" />
</template>
