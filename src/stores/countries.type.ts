export type CountryType = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  region: Regions;
  capital: string[] ;
  currencies: string[] | string;
  languages: string[] | string;
  population: number;
  area: number;
};

export enum Regions {
  AFRICA = "Africa",
  AMERICA = "Americas",
  ASIA = "Asia",
  EUROPE = "Europe",
  OCEANIA = "Oceania",
}
