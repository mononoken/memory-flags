import { MemoryCardProps } from "../types/MemoryCardProps";

export default function MemoryCardView({
  content,
  handleCardSelect,
}: MemoryCardProps) {
  return <button onClick={handleCardSelect}>{content}</button>;
}
