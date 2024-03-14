export interface Slide {
  type: "image" | "video";
  src: string;
  alt: string;
  aspectRatio: number;
  text?: string;
  position?: "top" | "center" | "bottom";
}
