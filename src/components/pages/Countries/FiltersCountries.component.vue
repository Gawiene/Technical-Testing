<template>
  <select v-model="store.selectedRegion">
    <option value="">All regions</option>
    <option v-for="region in regions" :key="region" :value="region">
      {{ region }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useCountriesStore } from "@/stores/countries.store";
const store = useCountriesStore();
const regions = store.regions;
</script>
