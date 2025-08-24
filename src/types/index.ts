import type { IconType } from "react-icons";

export interface ProductData {
  title: string;
  description: string;
  price?: string;
  originalPrice?: string;
  image: string;
  link: string;
  badge?: {
    text: string;
    variant: "primary" | "secondary" | "accent";
  };
}

export interface VideoData {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface SocialLinkData {
  href: string;
  icon: IconType;
  label: string;
}
