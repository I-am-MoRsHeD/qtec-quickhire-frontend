import type { Metadata } from "next";
import { Epilogue, Red_Hat_Display } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";


const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Regular.otf", weight: "400" },
    { path: "./fonts/ClashDisplay-Medium.otf", weight: "500" },
    { path: "./fonts/ClashDisplay-Semibold.otf", weight: "600" },
    { path: "./fonts/ClashDisplay-Bold.otf", weight: "700" },
  ],
  variable: "--font-clash",
});

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
});

const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat',
});

export const metadata: Metadata = {
  title: "QuickHire",
  description: "Discover your desired jobs here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${epilogue.variable} ${red_hat_display.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}