import {
  Black_Han_Sans as HanSans,
  Changa_One,
  Paytone_One,
  Red_Hat_Display as RedHat,
} from "next/font/google";

export const hanSans = HanSans({
  weight: "400",
  subsets: ["latin"],
  variable: "--han-sans-font",
});

export const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--changa-one-font",
});

export const paytone = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--paytone-font",
});

export const redHat = RedHat({
  subsets: ["latin"],
  variable: "--red-gat-font",
});
