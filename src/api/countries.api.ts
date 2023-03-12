import axios from "axios";
export const getCountriesAPI = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    throw new Error(
      `Sorry, we can't provide you this informations. Please retry later`
    );
  }
};
