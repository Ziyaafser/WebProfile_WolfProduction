import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Young Wolf",
  url: "https://www.wolves-official.com"
};

export const metadata = {
  metadataBase: new URL("https://www.wolves-official.com"),
  title: "Young Wolf Production | Engineering & Remote Operations",
  applicationName: "Young Wolf",
  description:
    "Certified engineering and remote operations company delivering precision, technology, and practical expertise.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Young Wolf Production | Engineering & Remote Operations",
    siteName: "Young Wolf",
    url: "https://www.wolves-official.com",
    description:
      "Certified engineering and remote operations company delivering precision, technology, and practical expertise."
  },
  icons: {
    icon: "/youngwolflogo.png",
    shortcut: "/youngwolflogo.png",
    apple: "/youngwolflogo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} ${inter.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
