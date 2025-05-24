import { GeistSans as FontSans, GeistMono as FontMono } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
