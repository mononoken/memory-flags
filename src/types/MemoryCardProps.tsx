import { ReactNode } from "react";
import { MouseEventHandler } from "react";

export interface MemoryCardProps {
  content: ReactNode;
  onCardSelect: MouseEventHandler<HTMLButtonElement>;
}
