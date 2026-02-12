import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/Header";

import ThemeProvider from "./theme-provider";
import Footer from "./UI/Footer";
import SWRegister from "./sw-register";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElmiraShokriyanFard",
  manifest: "/manifest.json",
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased  `}
      >
        <SWRegister/>
        <ThemeProvider>
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
