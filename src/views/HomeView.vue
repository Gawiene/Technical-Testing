<template>
  <section class="countries-page">
    <header class="countries-page__header">
      <search-countries />
      <filters-countries />
    </header>
    <main class="countries-page__main">
      <list-countries />
      <detail-country :country="store.selectedCountry" v-if="store.selectedCountry" />
    </main>
  </section>
</template>

<script setup lang="ts">
import ListCountries from "@/components/pages/Countries/ListCountries.component.vue";
import SearchCountries from "@/components/pages/Countries/SearchCountries.component.vue";
import FiltersCountries from "@/components/pages/Countries/FiltersCountries.component.vue";
import DetailCountry from "@/components/pages/Countries/DetailCountry.component.vue";
import { useCountriesStore } from "@/stores/countries.store";
import { onMounted } from "vue";

const store = useCountriesStore();
onMounted(() => {
  store.fetchCountriesList();
});
</script>
<style>
.countries-page {
  grid-column: 1/-1;
}
.countries-page__header {
  margin-bottom: 2rem;
}
.countries-page__main {
  grid-template-columns: auto 1fr;
  display: grid;
  gap: 2rem;
}
</style>
