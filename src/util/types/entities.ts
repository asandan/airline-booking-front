export type City = {
    id: number;
    name: string;
    countryId: number;
}

export type Country = {
    id: number;
    name: string;
    cities?: City[];
}