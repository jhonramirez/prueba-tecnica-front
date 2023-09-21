export const getCountriesService = async () => {
  return await fetch("https://restcountries.com/v3.1/all")
    .then((listCountries) => listCountries.json())
    .then((listCountriesJson) => {
      return listCountriesJson.map(({ name: countryName }) => ({
        label: countryName.common,
        value: countryName.common,
      }));
    });
};
