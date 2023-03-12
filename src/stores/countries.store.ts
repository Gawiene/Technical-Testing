import { getCountriesAPI } from "@/api/countries.api";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Regions, type CountryType } from "./countries.type";

export const useCountriesStore = defineStore({
  id: "CountriesStore",
  state: () => ({
    countriesList: [] as CountryType[],
    isLoading: ref<boolean>(true),
    selectedCountry: ref<CountryType | null>(null),
    search: ref<string>(""),
    selectedRegion: "",
    regions: Object.values(Regions),
  }),
  getters: {
    filteredCountries: (state) => {
      let countries = state.countriesList;
      if (state.search !== "") {
        countries = state.countriesList.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(state.search.toLowerCase());
        });
      }
      if (state.selectedRegion !== "") {
        countries = countries.filter(
          (country) => country.region === state.selectedRegion
        );
      }
      return countries;
    },
  },
  actions: {
    async fetchCountriesList(): Promise<void> {
      try {
        await getCountriesAPI().then((response) => {
          this.countriesList = response;
        });
      } catch (error) {
        console.error(error);
        this.isLoading = false;
      } finally {
        this.isLoading = false;
      }
    },
    selectCountry(country: CountryType) {
      this.selectedCountry = country;
    },
  },
});
