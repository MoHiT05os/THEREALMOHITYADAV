import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-next",
});

export const metadata = {
  title: "Mohit Yadav — TheRealMohitYadav | Building Physical AI",
  description: "Mohit Yadav is a CV + AI engineer interning at ISRO, building toward a Physical AI company. Explore projects, writing, and the TRMY universe.",
  keywords: ["Mohit Yadav", "TRMY", "TheRealMohitYadav", "Physical AI", "Computer Vision", "ISRO", "Robotics", "YOLO", "AI Engineer"],
  authors: [{ name: "Mohit Yadav" }],
  openGraph: {
    title: "Mohit Yadav — TheRealMohitYadav",
    description: "Building Physical AI. Translating civilization-scale technology. ISRO Intern. Founder-in-progress.",
    type: "website",
    url: "https://therealMohitYadav.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Yadav — TheRealMohitYadav",
    description: "Building Physical AI. Translating civilization-scale technology.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
