import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Article {
  title: string;
  description: string;
  content: string;
}

export type AppStates = "listView" | "articleView" | "topicView" | "bookshelfView"