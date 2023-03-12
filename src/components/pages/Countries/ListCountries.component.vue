<template>
  <div v-if="store.isLoading" class="loading">Loading countries...</div>
  <div v-else class="country-list">
    <div
      v-for="country in store.filteredCountries"
      :key="country.name.common"
      class="country-list__item"
      @click="store.selectCountry(country)"
    >
      <img
        class="country-list__img"
        :src="country.flags.svg"
        alt="Flag of {{ country.name.common }}"
      />
      <div>
        <div class="country-list__name">{{ country.name.common }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from "@/stores/countries.store";
const store = useCountriesStore();
</script>

<style>
/* Need install sass */
.country-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
.country-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px #000;
  padding: 1rem;
  cursor: pointer;
  background-color: #fff;
}
.country-list__img {
  width: 50px;
}
.country-list__name {
  color: #000;
}
</style>
