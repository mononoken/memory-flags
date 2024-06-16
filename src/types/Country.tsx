// Expected output from fetching https://restcountries.com/v3.1/all?fields=name,flags
export interface Country {
  flags: { png: string };
  name: { common: string };
}
