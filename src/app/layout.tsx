import type { Metadata } from "next";
import { Young_Serif, Figtree, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LanguageProvider } from "@/components/LanguageContext";
import { OrderProvider } from "@/components/OrderContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrderDrawer } from "@/components/OrderDrawer";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young-serif",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-nastaliq",
  display: "swap",
});

export const viewport = {
  themeColor: "#FAF7F0",
};

export const metadata: Metadata = {
  title: `${siteConfig.shopNameEn} | Premium Traditional Sweets`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.shopNameEn} | Premium Traditional Sweets`,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_PK",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${youngSerif.variable} ${figtree.variable} ${notoNastaliq.variable} font-sans bg-malai text-ink antialiased selection:bg-saffron selection:text-ink min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <OrderProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <OrderDrawer />
          </OrderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
