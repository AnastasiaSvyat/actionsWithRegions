export interface Country {
    name: {
        official: string
    };
    flags: {
        alt: string;
        png: string;
    }
    capital: string;
    currencies: Array<string>;
    population: number;
    fifa: string
}