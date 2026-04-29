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
  title: "Ashith Jain - Front-End Developer",
  description:
    "Front-End Developer skilled in HTML5, CSS3, Bootstrap, JavaScript, jQuery, ReactJs, Python, SQL, Tailwind CSS, Next.js, Git, GitHub, and Postman.",
  authors: [{ name: "Ashith Jain" }],
  openGraph: {
    title: "Ashith Jain - Front-End Developer",
    description:
      "Front-End Developer skilled in modern web technologies and tooling.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
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
