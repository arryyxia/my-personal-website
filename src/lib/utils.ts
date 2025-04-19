import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(isoString: string): string {
    const date = new Date(isoString);
    return date.toISOString().split("T")[0]; // Extract only the date part (YYYY-MM-DD)
}