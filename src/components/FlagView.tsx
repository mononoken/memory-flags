import { FlagProps } from "../types/FlagProps";

export default function FlagView({ country, imageUrl }: FlagProps) {
  return (
    <div className="flex flex-col space-y-2">
      <img src={imageUrl} alt={`Flag of ${country}`} />
      <p>{country}</p>
    </div>
  );
}
