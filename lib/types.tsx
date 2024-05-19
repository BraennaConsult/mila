export interface Slide {
  type: "image" | "video";
  src: string;
  alt: string;
  aspectRatio: number;
  text?: string;
  position?: "top" | "center" | "bottom";
  poster?: string;
  autoPlay?: boolean;
  tint?: boolean;
  cta?: boolean;
}

export type PageType = "website" | "funnel" | "sales";
