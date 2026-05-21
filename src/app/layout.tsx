import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Using Noto Sans Arabic as a proxy for Kashmiri if needed, 
// though standard Arabic script covers most Kashmiri characters.
const notoKashmiri = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kashmiri",
});

export const metadata: Metadata = {
  title: "CJP Kashmir | Voice of the Forgotten Valley 🪳",
  description: "Unemployed. Overlooked. Overqualified. Underpaid. Kashmir's youth are not broken — we are building. Join the movement for radical transparency and youth-led governance in Jammu & Kashmir.",
  keywords: [
    "CJP Kashmir", 
    "Kashmir Youth", 
    "Accountability", 
    "Transparency", 
    "J&K Development", 
    "Kashmir Manifesto", 
    "Youth Governance", 
    "Unemployment Kashmir",
    "Digital Rebellion Kashmir"
  ],
  authors: [{ name: "CJP Kashmir Colony" }],
  openGraph: {
    title: "CJP Kashmir | Voice of the Forgotten Valley",
    description: "The cockroach survives. Join the swarm for a transparent and accountable Kashmir.",
    url: "https://cjpkashmir.in",
    siteName: "CJP Kashmir",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CJP Kashmir | Voice of the Forgotten Valley",
    description: "Kashmir's youth are not broken — we are building.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${notoKashmiri.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
