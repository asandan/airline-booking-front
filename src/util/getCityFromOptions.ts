import { Option } from "@/pages";

export const getCityFromOptions = (city: string, options: Option[]) => {
  return options.find((country) => country.value === city)?.key;
};
