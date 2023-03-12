<template>
  <input type="text" v-model="store.search" placeholder="Search country..." />
</template>

<script setup lang="ts">
import { useCountriesStore } from "@/stores/countries.store";
const store = useCountriesStore();
</script>
