<template>
  <section>
    <header>
      <h2>{{ country.name.common }}</h2>
      <img :src="country.flags.svg" alt="Flag of {{ country.name.common }}" width="200">
    </header>
    <main class="country-detail" >
      <div><span class="label">Capital:</span> {{ country.capital.join(', ') }}</div>
      <div><span class="label">Currencies:</span> {{ (country.currencies) }}</div>
      <div><span class="label">Languages:</span> {{ Object.values(country.languages).join(', ')}}</div>
      <div><span class="label">Population:</span> {{ country.population }}</div>
      <div><span class="label">Area:</span> {{ country.area }} km²</div>
    </main>
  </section>

</template>

<script setup lang="ts">
import type { CountryType } from "@/stores/countries.type";

type Props = {
  country: CountryType;
};

defineProps<Props>();


</script>
