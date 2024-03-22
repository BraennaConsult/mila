import { Hind_Vadodara, Inter, Libre_Baskerville } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

export const hindVadodara = Hind_Vadodara({
  subsets: ["latin"],
  weight: ["400", "600"],
});
