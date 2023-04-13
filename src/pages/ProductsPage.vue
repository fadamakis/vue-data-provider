<script setup>
import BoringTable from "@/components/BoringTable.vue";
import DataProvider from "@/components/DataProvider.ts";
</script>

<template>
  <div class="container">
    <h1>Products Page</h1>
    <DataProvider category="smartphones" v-slot="{ data, loading }">
      <BoringTable :items="data" title="Smartphones" v-if="loading" />
    </DataProvider>

    <DataProvider category="laptops" v-slot="{ data, loading }">
      <BoringTable :items="data" title="Laptops" v-if="loading" />
    </DataProvider>
  </div>
</template>

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
