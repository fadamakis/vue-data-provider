<template>
  <div class="container">
    <BoringTable :items="smartphones" :headers="headers" title="Smartphones" />
    <BoringTable :items="laptops" :headers="headers" title="Laptops" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BoringTable from "@/components/BoringTable.vue";

const smartphones = ref([]);
const laptops = ref([]);

async function fetchProducts(category) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  ).then((res) => res.json());
  return response.products;
}

onMounted(async () => {
  smartphones.value = await fetchProducts("smartphones");
  laptops.value = await fetchProducts("laptops");
});
</script>

<style scoped lang="scss">
.container {
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
