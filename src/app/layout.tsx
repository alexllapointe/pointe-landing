import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { Navbar1 } from "@/components/navbar1";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const editorialNew = localFont({
  src: [
    {
      path: "../../fonts/editorial-new/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/editorial-new/PPEditorialNew-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/editorial-new/PPEditorialNew-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/editorial-new/PPEditorialNew-UltraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
});

export const metadata: Metadata = {
  title: "Pointe",
  description: "Pointe - Operational engineering for growing companies",
  icons: {
    icon: "/pointe-logo-rounded.png",
    apple: "/pointe-logo-rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${editorialNew.variable} antialiased`}>
        <Navbar1
          logo={{ url: "/", src: "", alt: "pointe", title: "pointe" }}
          menu={[]}
        />
        {children}
      </body>
    </html>
  );
}
