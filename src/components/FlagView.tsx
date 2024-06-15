import { FlagProps } from "../types/FlagProps";

export default function FlagView({ country, imageUrl }: FlagProps) {
  return (
    <div>
      <img src={imageUrl} alt={`Flag of ${country}`} />
      <p>{country}</p>
    </div>
  );
}
