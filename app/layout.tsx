import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "@/components/Providers";
import "@/index.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Stackly Auth",
  description:
    "Static Stackly authentication, planning, and storefront pages exported with Next.js.",
  authors: [{ name: "Stackly" }],
  openGraph: {
    title: "Stackly Auth",
    description:
      "Static Stackly authentication, planning, and storefront pages exported with Next.js.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
