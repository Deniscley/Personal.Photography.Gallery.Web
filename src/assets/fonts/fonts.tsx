import { Montserrat, Yellowtail } from "next/font/google";

export const yellowtail = Yellowtail({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
