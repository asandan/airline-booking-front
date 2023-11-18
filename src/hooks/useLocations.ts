import { useQuery } from "@tanstack/react-query";
import { Option, QueryValues } from "@/pages";
import { Country } from "@/util/types";

export const useLocations = ({
  countryFrom,
  countryTo,
  cityFrom,
  cityTo,
}: QueryValues) => {
  const { data: countryFromData } = useQuery(["countryFromData"], async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/country`);
    return await response.json();
  });
  const { data: countryToData } = useQuery(["countryTo"], async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/country`);
    return await response.json();
  });

  const { data: cityFromData } = useQuery(
    ["cityFrom", cityFrom, JSON.stringify(countryFromData), countryFrom],
    async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/city/byCountry/${countryFrom}`
      );
      return await response.json();
    },
    {
      enabled: !!countryFromData,
    }
  );

  const { data: cityToData } = useQuery(
    ["cityTo", cityTo, JSON.stringify(countryToData), countryTo],
    async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/city/byCountry/${countryTo}`
      );
      return await response.json();
    },
    {
      enabled: !!countryToData,
    }
  );


  const countryFromOptions: Option[] =
    countryFromData?.map((unit: Country) => ({
      value: `${unit.id}`,
      key: unit.name,
    })) ?? [];

  const countryToOptions: Option[] =
    countryToData?.map((unit: Country) => ({
      value: `${unit.id}`,
      key: unit.name,
    })) ?? [];

  //if countryFrom and countryFrom exist, then process cities options and return all options
  if (!cityFromData?.status && !cityToData?.status) {
    console.log(!!cityFromData, !!cityToData, cityFromData, cityToData)
    const cityFromOptions: Option[] =
      cityFromData?.map((unit: Country) => ({
        value: `${unit.id}`,
        key: unit.name,
      })) ?? [];

    const cityToOptions: Option[] =
      cityToData?.map((unit: Country) => ({
        value: `${unit.id}`,
        key: unit.name,
      })) ?? [];

    return {
      countryFrom: countryFromOptions,
      countryTo: countryToOptions,
      cityFrom: cityFromOptions,
      cityTo: cityToOptions,
    };
  }

  //else return only country options
  return {
    countryFrom: countryFromOptions,
    countryTo: countryToOptions,
  };
};
