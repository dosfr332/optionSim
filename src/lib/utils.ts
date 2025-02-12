import { useTheme } from "@/components/ui/theme-provider";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function camelCaseToWords(s: string) {
  const result = s.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function ncdf(x: number, mean: number, std: number) {
  var x = (x - mean) / std;
  var t = 1 / (1 + 0.2315419 * Math.abs(x));
  var d = 0.3989423 * Math.exp((-x * x) / 2);
  var prob =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (x > 0) prob = 1 - prob;
  return prob;
}

export function getTheme() {
  const theme = useTheme();

  let currTheme;
  if (theme.theme === "system") {
    currTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else {
    currTheme = theme.theme;
  }
  return currTheme;
}

export function rnorm(): number {
  let u1 = 0;
  let u2 = 0;

  // Ensure u1 is not zero to avoid infinite logarithm
  while (u1 === 0) u1 = Math.random();
  u2 = Math.random();

  const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

  return z;
}
