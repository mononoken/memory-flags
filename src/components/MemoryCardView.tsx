import { MemoryCardProps } from "../types/MemoryCardProps";

export default function MemoryCardView({
  content,
  onCardSelect,
}: MemoryCardProps) {
  return (
    <button
      onClick={onCardSelect}
      className="bg-cardBackground p-4 border border-slate-700 rounded-md hover:border-violet-400 focus:border-violet-500"
    >
      {content}
    </button>
  );
}
