type FlagProps = {
  country: string;
  imageUrl: string;
};

export default function Flag({ country, imageUrl }: FlagProps) {
  return (
    <div>
      <img src={imageUrl} alt={`Flag of ${country}`} />
      <p>{country}</p>
    </div>
  );
}
